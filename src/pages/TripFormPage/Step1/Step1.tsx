import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form'

import { AddIcon, Button, InfoIcon, Modal, Select } from 'components'
import { ChangeLocationModal } from 'features'
import { TripDayForm } from './TripDayForm'
import { Transfer } from './Transfer'

import { getTripDayByDestination } from 'shared/api/routes/order'
import { useTranslate } from 'shared/hooks/useTranslate'
import { destinationToOption } from 'shared/helpers/destinations'
import { getTripDuration } from 'shared/helpers/trip'
import { getParentDestination } from 'store/slices/destinations/selectors'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'
import { getTransfer } from 'shared/api/routes/transfer'
import { useModal } from 'shared/hooks/useModal'
import {
  getTripDays,
  provideOptionsWithIcon,
} from 'shared/helpers/transformers'

import { CarTransferType } from 'shared/types/car'
import { Destination } from 'shared/types/destinations'
import { OrderForm } from 'shared/types/order'
import { Trip } from 'shared/types/trip'
import { Steps } from '../TripFormPage'
import {
  Transfer as TransferType,
  TransferOptions,
  TransferValue,
} from 'shared/types/transport'

import { DEFAULT_TRANSFER } from 'shared/constants/transfer'

import airportIcon from '/public/assets/images/airport.svg?url'

import s from './Step1.module.scss'

interface Step1Props {
  setStep: (step: Steps) => void
  trip: Trip
  airports: Destination[]
  transfers: TransferOptions[]
  transferValues: TransferValue[]
  formHook: UseFormReturn<Partial<OrderForm>, any>
}

export const Step1: FC<Step1Props> = ({
  // TODO
  setStep,
  trip,
  airports,
  transfers,
  transferValues,
  formHook: { watch, control, getValues, setValue, handleSubmit },
}) => {
  const dispatch = useAppDispatch()
  const t = useTranslate()
  const form = useAppSelector(state => state.order.form)
  const destinations = useAppSelector(state => state.destinations.destinations)
  const tripParentRegion = useAppSelector(state =>
    getParentDestination(
      state,
      trip.destinations[trip.destinations.length - 1].destination_id
    )
  )
  const { append, remove } = useFieldArray({
    control,
    name: 'destinations',
  })

  const watchForm = watch()
  const watchDestinations = watch('destinations')
  const watchStartPoint = watch('dest_from')
  const watchEndPoint = watch('dest_to')
  const airportOptions = provideOptionsWithIcon(
    destinationToOption(airports),
    airportIcon
  )

  const [startPointTransfer, setStartPointTransfer] = useState(DEFAULT_TRANSFER)
  const [endPointTransfer, setEndPointTransfer] = useState(DEFAULT_TRANSFER)
  const [nearDestinations, setNearDestinations] = useState<Destination[]>([])
  const locationModal = useModal()

  const changeLocation = async (id: number) => {
    const data = getTripDayByDestination(id)
  }
  const addLocation = async () => {
    locationModal.open()
  }

  const onSubmit = (formData: any) => {
    // TODO add type
    dispatch(updateForm(formData))
    setStep(Steps.SECOND)
  }

  const loadTransfer = async (from: number, to: number) => {
    const response = await getTransfer(from, to)
    return response
  }

  const updateEndPointTransfer = (id: number | null, type: TransferType) => {
    const prevTransfer = getValues('transports') ?? []
    setValue(`transports`, [
      ...prevTransfer,
      {
        value: id,
        type: type,
      },
    ])
  }

  useEffect(() => {
    const loadTransfer = async (from: number, to: number) => {
      const response = await getTransfer(from, to)
      setEndPointTransfer(response)
    }
    if (
      watchDestinations &&
      watchDestinations[watchDestinations.length - 1] &&
      watchEndPoint
    ) {
      loadTransfer(
        watchDestinations[watchDestinations?.length - 1].destination_id,
        Number(watchEndPoint.value)
      )
    }
  }, [watchEndPoint, watchDestinations])

  useEffect(() => {
    const loadTransfer = async (from: number, to: number) => {
      const response = await getTransfer(from, to)
      setStartPointTransfer(response)
    }
    if (watchDestinations && watchDestinations[0] && watchStartPoint) {
      loadTransfer(
        Number(watchStartPoint.value),
        watchDestinations[0].destination_id
      )
    }
  }, [watchStartPoint, watchDestinations])

  if (!trip) return null
  return (
    <>
      <div className={s.container}>
        <div className={s.flights}>
          <div className={s.select}>
            <div className={s.selectLabel}>{t('tripSteps.label3')}:</div>
            <Controller
              name='dest_from'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  value={value}
                  options={airportOptions}
                  placeholder={t('common.select')}
                />
              )}
            />
          </div>
        </div>

        {watchDestinations?.map((dest, index) => {
          return (
            <TripDayForm
              key={index}
              index={index}
              onDelete={
                index === watchDestinations.length - 1 && index > 0
                  ? id => remove(id)
                  : undefined
              }
              onChange={setValue}
              form={form}
              hotel={dest.hotel}
              description={dest.description ?? t('tripSteps.noDescription')}
              duration={dest.duration}
              capacity={form.rooms ?? []}
              destination={dest}
              day={getTripDays(watchDestinations, index)}
              total={getTripDuration(watchDestinations) + 1}
              type={CarTransferType.PICKUP}
              from={
                trip.destinations[index - 1]
                  ? {
                      label: trip.destinations[index - 1].destination_name,
                      value:
                        trip.destinations[index - 1].destination_id.toString(),
                    }
                  : watchForm.dest_from ?? undefined
              }
              previousDestination={watchDestinations[index - 1] ?? null}
              transfers={transfers}
              transferValue={transferValues[index]}
            />
          )
        })}

        <Transfer
          onChange={(id, type) => updateEndPointTransfer(id, type)}
          from={{
            label:
              trip.destinations[trip.destinations.length - 1].destination_name,
            value:
              trip.destinations[
                trip.destinations.length - 1
              ].destination_id.toString(),
          }}
          to={watchEndPoint}
          options={endPointTransfer}
          value={null}
        />

        <div className={s.endpoint}>
          <div className={s.select}>
            <div className={s.selectLabel}>{t('tripSteps.endPoint')}:</div>
            <Controller
              name='dest_to'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  value={value}
                  options={airportOptions}
                  placeholder={t('common.select')}
                />
              )}
            />
          </div>
        </div>

        <div className={s.addLocationSectionWrap}>
          <div className={s.addLocationSection} onClick={() => addLocation()}>
            <AddIcon />
            <div className={s.addLocationTitle}>{t('tripSteps.add')}</div>
            <div className={s.addLocationInfo}>
              <InfoIcon />
            </div>
          </div>
        </div>

        <div className={s.actions}>
          <Button onClick={handleSubmit(onSubmit)}>
            {t('tripSteps.next')}
          </Button>
          <Button variant='outline'>
            <Link href={`/trips/${trip.id}`}>{t('tripSteps.cancel')}</Link>
          </Button>
        </div>
      </div>
      <Modal {...locationModal} title={t('changingLocation.windowTitle')}>
        <ChangeLocationModal
          {...locationModal}
          onSubmit={id => changeLocation(id)}
          current={
            trip.destinations[trip.destinations.length - 1].destination_id
          }
          location={tripParentRegion?.location_name ?? ''}
          destinations={nearDestinations}
        />
      </Modal>
    </>
  )
}
