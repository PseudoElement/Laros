import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { ChevronRightIcon, ChevronLeftIcon, ResetIcon } from 'components'
import { Step1 } from './Step1/Step1'
import { Step2 } from './Step2/Step2'

import { useGetTripInfo } from 'shared/hooks/useGetTripInfo'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'
import { useTranslate } from 'shared/hooks/useTranslate'
import { Sidebar } from './Sidebar/Sidebar'

import { countriesToOptions } from 'shared/helpers/transformers'
import { downloadFile } from 'shared/helpers/downloadFile'
import { URL } from 'shared/api'

import { OrderForm, PeopleCapacity } from 'shared/types/order'

import bg from '/public/assets/images/tripFormBg.png'

import s from './TripFormPage.module.scss'
import { destinationToOption } from 'shared/helpers/destinations'
import { useFieldArray, useForm } from 'react-hook-form'
import { prepareOrderFormToApi, transfersToAPI } from 'shared/helpers/order'
import { calculateOrder } from 'shared/api/routes/order'
import { useDebounce } from 'shared/hooks/useDebounce'

export enum Steps {
  FIRST,
  SECOND,
}

export const TripFormPage: FC = () => {
  const [step, setStep] = useState(Steps.FIRST)
  const [price, setPrice] = useState<number>(0)
  const { query, push, reload, pathname } = useRouter()
  const dispatch = useAppDispatch()
  const isHotelPage = pathname.includes('hotel')
  const t = useTranslate()
  const { trip, airports, countries, isLoading, transfers, transferValues } = useGetTripInfo(
    Number(query.trip), { isHotelPage }
  )
  const form = useAppSelector(state => state.order.form)
  const formHook = useForm<Partial<OrderForm>>({
    defaultValues: {
      dest_from: destinationToOption(airports).find(
        dest => dest.label === 'Flughafen Zürich (ZRH)'
      ),

      dest_to: destinationToOption(airports).find(
        dest => dest.label === 'Flughafen Zürich (ZRH)'
      ),
      destinations: trip?.destinations ?? [],
      travellers: [],
      date_start: form.date_start ?? Number(new Date()),
      rooms: form.rooms ?? [],
      transports: transferValues,
    },
  })
  const {} = useFieldArray({
    control: formHook.control,
    name: 'destinations',
  })
  const debounchedCalculation = useDebounce(formHook.watch, 3000)

  // download trip pdf
  const handleDownload = () => {
    downloadFile(`${URL}trip/${Number(query.trip)}/pdf`)
  }

  // next step
  const handleNextStep = () => {
    setStep(Steps.SECOND)
  }

  const getCapacity = (capacity: PeopleCapacity[]): number => {
    return capacity.reduce((prev, next) => prev + next.adults, 0)
  }

  useEffect(() => {
    if (trip) {
      setPrice(trip.price_chf)
      formHook.setValue('destinations', trip.destinations)
      dispatch(updateForm({ destinations: trip.destinations }))
      // TODO possible issue when user go to the step 2 and back
    }
  }, [trip, dispatch])

  useEffect(() => {
    formHook.setValue('transports', transferValues)
  }, [transferValues])
  useEffect(() => {
    formHook.setValue(
      'dest_from',
      destinationToOption(airports).find(
        dest => dest.label === 'Flughafen Zürich (ZRH)'
      )
    )
    formHook.setValue(
      'dest_to',
      destinationToOption(airports).find(
        dest => dest.label === 'Flughafen Zürich (ZRH)'
      )
    )
  }, [airports])

  const loadPrice = async (form: OrderForm) => {
    try {
      const { data } = await calculateOrder(prepareOrderFormToApi(form))
      // @ts-ignore
      setPrice(data.data.price_per_person_chf)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const subscription = formHook.watch((value, { name, type }) => {
      const formValue = value
      if (
        formValue.destinations?.length &&
        formValue.dest_from &&
        formValue.transports?.every(trans => trans)
      ) {
        loadPrice(formValue as OrderForm)
      }
    })
    return () => subscription.unsubscribe()
  }, [debounchedCalculation])
  if (isLoading || !trip) {
    return <div>{t('common.loadingText')}</div>
  }

  return (
    <div className={s.container}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      />

      <div className={s.content}>
        <div className={s.form}>
          <div className={s.header}>
            <div
              onClick={() =>
                step === Steps.FIRST
                  ? push(`/trips/${query.trip}`)
                  : setStep(Steps.FIRST)
              }
            >
              <ChevronLeftIcon />
              <div className={s.title}>{t('tripSteps.buttonBack')}</div>
            </div>
            {/* <div onClick={() => reload(window.location.pathname)} >
              <ResetIcon /><div className={s.reset}>Reset all changes</div>
            </div> */}
          </div>

          <div className={cn(s.formWrap, ['scrollStyle'])}>
            <div className={s.crumbs}>
              <div
                className={cn(s.crumbStep, {
                  [s.activeCrumb]: step === Steps.FIRST,
                })}
                onClick={() => setStep(Steps.FIRST)}
              >
                <span className={s.stepIndex}>1</span>
                <span className={s.crumbStep}>{t('tripSteps.step')} 1:</span>
                <span className={s.stepName}>{t('tripSteps.details')}</span>

                <div className={s.arrow}>
                  <ChevronRightIcon />
                </div>
              </div>

              <div
                className={cn(s.crumbStep, {
                  [s.activeCrumb]: step === Steps.SECOND,
                })}
              >
                <span className={s.stepIndex}>2</span>
                <span className={s.crumbStep}>{t('tripSteps.step')} 2:</span>
                <span className={s.stepName}>{t('tripSteps.travellers')}</span>
              </div>
            </div>

            <div className={s.info}>
              <div className={s.infoTitle}>{trip?.name}</div>

              <div className={s.infoLocation}>{trip?.offer_name}</div>
            </div>

            {step === Steps.FIRST ? (
              <Step1
                setStep={setStep}
                trip={trip}
                airports={airports}
                transfers={transfers}
                transferValues={transferValues}
                formHook={formHook}
              />
            ) : (
              <Step2
                setStep={setStep}
                capacity={getCapacity(form.rooms)}
                countries={countriesToOptions(countries)}
              />
            )}
          </div>
        </div>

        <Sidebar
          route={trip?.route ?? ''}
          travel_date={form.date_start}
          rooms={form.rooms}
          total={price}
          handleDownload={!isHotelPage ? handleDownload : undefined}
          handleNextStep={handleNextStep}
          step={step}
        />
      </div>
    </div>
  )
}
