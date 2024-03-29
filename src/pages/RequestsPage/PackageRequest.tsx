import { FC, useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import cn from 'classnames'
import Link from 'next/link'

import {
  Button,
  Input,
  InputCalendar,
  CheckboxGroup,
  Radio,
  Select,
  StarSelectComponent,
} from 'components'
import { TravellerForm, TravellerAddressForm } from 'features'

import { AppDispatch } from 'store'
import { getDayName } from 'shared/helpers/localize'
import { useAppDispatch } from 'shared/hooks/redux'
import { getAirports } from 'shared/api/routes/requests'
import { sendPackageRequestThunk } from 'store/slices/packageRequest/thunk'
import { useTranslate } from 'shared/hooks/useTranslate'

import { Airport } from 'shared/types/airport'
import { PackageRequestFormType } from 'shared/types/requestForm'
import {
  DEFAULT_BOARD_TYPE,
  DEFAULT_DURATION,
  DEFAULT_HOTEL_CATEGORY,
  DEFAULT_TRANSFER_TYPE,
  DEFAULT_TRAVELLER,
} from 'shared/constants/packageRequest'
import {
  boardTypes,
  hotelCategory,
  transferOptions,
} from 'shared/constants/form'

import s from '../FlightRequestPage/FlightRequestPage.module.scss' ///Here's using styles from another component
// import s from './RequestsPackage.module.scss'
import { convertErrorsForAlert } from 'shared/helpers/convertErrorsForAlert'
import { vocabulary } from 'shared/constants/vocabulary'
import { isNotChoosenNationality } from 'shared/helpers/isNotChoosenNationality'

export interface PackageRequestFormProps {
  onFormSubmit: () => void
}

export const PackageRequestForm: FC<PackageRequestFormProps> = ({
  onFormSubmit,
}) => {
  const t = useTranslate()
  const dispatch: AppDispatch = useAppDispatch()
  const [adultsCount, setAdultsCount] = useState<number>(1)
  const [childrenCount, setChildrenCount] = useState<number>(0)
  const [babyCount, setBabyCount] = useState<number>(0)
  const [travellersCount, setTravellerCount] = useState<number>(0)

  const {
    handleSubmit,
    watch,
    control,

    formState: {},
  } = useForm<PackageRequestFormType & TravellerAddressForm>({
    defaultValues: {
      travellers: [DEFAULT_TRAVELLER],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'travellers',
  })

  const watchAdultsCount = watch('adults', adultsCount)
  const watchChildrenCount = watch('children', 0)
  const watchBabyCount = watch('baby', 0)

  useEffect(() => {
    if (watchAdultsCount != adultsCount) {
      watchAdultsCount > adultsCount
        ? append(DEFAULT_TRAVELLER)
        : remove(travellersCount - 1)
      setAdultsCount(watchAdultsCount)
    }
    if (watchChildrenCount != childrenCount) {
      watchChildrenCount > childrenCount
        ? append(DEFAULT_TRAVELLER)
        : remove(travellersCount - 1)
      setChildrenCount(watchChildrenCount)
    }
    if (watchBabyCount != babyCount) {
      watchBabyCount > babyCount
        ? append(DEFAULT_TRAVELLER)
        : remove(travellersCount - 1)
      setBabyCount(watchBabyCount)
    }
  }, [watchAdultsCount, watchChildrenCount, watchBabyCount])

  useEffect(() => {
    setTravellerCount(adultsCount + childrenCount)
  }, [adultsCount, childrenCount])

  // push data
  const onSubmit = (data: PackageRequestFormType) => {
    //In react-hook-form error that nationality object defines incorrectly
    if (isNotChoosenNationality(data)) {
      alert(vocabulary?.travellersData)
      return
    }
    dispatch(sendPackageRequestThunk(data))
    onFormSubmit()
  }
  const onError = (error: any) => {
    alert(convertErrorsForAlert(error))
  }

  // get select options from Depart from, Arrival to
  const airportOptions = async (inputValue: string) => {
    const { data } = await getAirports(inputValue)
    return data.data.map((item: Airport) => ({
      label: item.name,
      value: item.id,
    }))
  }

  return (
    <div className={s.wrapper}>
      {/* 1-st row  */}
      <div className={s.row}>
        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>
            {`${t('worldwideTours.label1')}*`}:
          </div>
          <Controller
            name='departFrom'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Select
                classname={s.select}
                onChange={onChange}
                loadOptions={airportOptions}
                placeholder={t('common.select')}
                options={[]}
                async
              />
            )}
          />
        </div>

        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>{`${t(
            'worldwideTours.label2'
          )}*`}</div>
          <Controller
            name='arrivalTo'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Select
                classname={s.select}
                onChange={onChange}
                placeholder={t('common.select')}
                loadOptions={airportOptions}
                options={[]}
                async
              />
            )}
          />
        </div>
      </div>

      {/* 2-d row */}
      <div className={s.row}>
        <Controller
          name='earliestDeparture'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <InputCalendar
              required
              classname={s.inputCalendarCustom}
              variant={'top'}
              onChange={onChange}
              label={t('worldwideTours.label3')}
            />
          )}
        />

        <Controller
          name='latestReturn'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <InputCalendar
              required
              classname={s.inputCalendarCustom}
              variant={'top'}
              onChange={onChange}
              label={t('worldwideTours.label4')}
            />
          )}
        />
      </div>

      {/* 3-d row  */}
      <div className={s.row}>
        <div className={s.counterRow}>
          <Controller
            name='adults'
            defaultValue={adultsCount}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.counterInput}
                withCounter={true}
                onChange={onChange}
                value={value}
                label={t('forms.inputNumber1')}
                type={'number'}
              />
            )}
          />
          <Controller
            name='children'
            defaultValue={childrenCount}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.counterInput}
                withCounter={true}
                onChange={onChange}
                value={value}
                label={t('forms.inputNumber2')}
                type={'number'}
              />
            )}
          />
          <Controller
            name='baby'
            defaultValue={babyCount}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                classname={s.counterInput}
                withCounter={true}
                onChange={onChange}
                value={value}
                label={t('forms.inputNumberBaby')}
                type={'number'}
              />
            )}
          />
        </div>
      </div>
      <div className={s.row}>
        <div className={s.travelDurationCounter}>
          <Controller
            name='travelDuration'
            defaultValue={DEFAULT_DURATION}
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <span className={s.dayString}>
                  {value && `${t(getDayName(value, 'day'))}`}
                </span>
                <Input
                  classname={s.counterInput}
                  withCounter={true}
                  onChange={onChange}
                  value={value ? value : ''}
                  label={t('forms.inputLabel17')}
                  type={'number'}
                />
              </>
            )}
          />
        </div>
      </div>

      {/* 4-th row */}
      <div className={cn(s.row, s.optionsRow)}>
        <Controller
          name='transferType'
          control={control}
          defaultValue={DEFAULT_TRANSFER_TYPE}
          render={({ field: { onChange, value } }) => (
            <div className={s.radio}>
              <div className={s.radioLabel}>{t('tripSteps.label5')}</div>
              <Radio
                name='transferType'
                onChange={onChange}
                value={value ? value : ''}
                options={transferOptions}
              />
            </div>
          )}
        />
      </div>

      {/* 5th row */}
      <div className={s.row}>
        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>{t('worldwideTours.label14')}:</div>
          <Controller
            name='hotelCategory'
            control={control}
            defaultValue={DEFAULT_HOTEL_CATEGORY}
            render={({ field: { onChange, value } }) => (
              <StarSelectComponent
                classname={s.select}
                onChange={onChange}
                options={hotelCategory}
                value={value}
                withStar
                controlIconSize={17}
              />
            )}
          />
        </div>
      </div>

      {/* 6th row */}
      <div className={cn(s.row, s.optionsRow)}>
        <div className={s.checkboxGroup}>
          <div className={s.checkboxLabel}>{`${t(
            'worldwideTours.boardType'
          )}*`}</div>
          <div className={s.checkbox}>
            <Controller
              rules={{ required: true }}
              name='boardType'
              control={control}
              defaultValue={DEFAULT_BOARD_TYPE}
              render={({ field: { onChange } }) => (
                <CheckboxGroup options={boardTypes} onChange={onChange} />
              )}
            />
          </div>
        </div>
      </div>

      {/* 5-th row  */}
      <div className={s.row}>
        <div className={s.selectWrapper}>
          <Controller
            name='totalTripBudget'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value = 0 } }) => (
              <div className={s.selectCHF}>
                <div className={s.inputLabel}>{`${t(
                  'worldwideTours.label15'
                )}*`}</div>
                <Input
                  label={'CHF'}
                  onChange={onChange}
                  value={value}
                  type={'number'}
                />
              </div>
            )}
          />
        </div>
      </div>

      <div className={s.travellersSection}>
        <h2 className={s.travellersSubtitle}>{`${travellersCount} ${t(
          'worldwideTours.travellerTotal'
        )}`}</h2>
        <ul className={s.travellersList}>
          {fields.map((field, index) => (
            <TravellerForm
              key={index}
              field={field}
              index={index}
              control={control}
              watch={watch}
            />
          ))}
        </ul>
      </div>

      <div className={s.emailWrapper}>
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          defaultValue={'user@example.com'}
          render={({ field: { onChange, value } }) => (
            <Input
              type='email'
              classname={s.input}
              onChange={onChange}
              value={value}
              label={`${t('forms.inputLabel2')}*`}
              placeholder={t('forms.email3')}
            />
          )}
        />
      </div>

      <Controller
        name='comment'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            classname={s.commentInput}
            onChange={onChange}
            value={value ? value : ''}
            label={t('worldwideTours.label11')}
            placeholder={t('worldwideTours.label12')}
          />
        )}
      />

      <div className={s.footer}>
        <Button
          onClick={handleSubmit(onSubmit, onError)}
          type='submit'
          classname={s.submitButton}
        >
          {t('worldwideTours.submitButton')}
        </Button>

        <p className={s.privacyPolicy}>
          {t('worldwideTours.Privacy1')}{' '}
          <Link className={s.link} href={'/terms/1'}>
            {t('worldwideTours.Privacy2')}
          </Link>{' '}
          {t('worldwideTours.Privacy3')}{' '}
          <Link className={s.link} href={'/terms/1'}>
            {t('worldwideTours.Privacy4')}
          </Link>
        </p>
      </div>
    </div>
  )
}
