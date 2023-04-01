import { FC, useEffect } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import Link from 'next/link'

import { Button, WarningIcon, Input, Radio, Select } from 'components'
import { Steps } from '../TripFormPage'
import { TravelerForm } from './TravelerForm'

import { useTranslate } from 'shared/hooks/useTranslate'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { sendOrderThunk } from 'store/slices/order/thunk'

import { booleanOptions, titleOptions } from 'shared/constants/form'
import { Option } from 'shared/types'
import { OrderForm } from 'shared/types/order'
import { updateForm } from 'store/slices/order/order'
import { prepareOrderFormToApi } from 'shared/helpers/order'

import s from './Step2.module.scss'
import { vocabulary } from 'shared/constants/vocabulary'

interface Step2Props {
  setStep: (step: Steps) => void
  countries: Option[]
  capacity: number
}

export const Step2: FC<Step2Props> = ({ setStep, capacity, countries }) => {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Partial<OrderForm>>({
    defaultValues: {
      travellers: Array(capacity).fill({
        name: '',
        dob: new Date(),
        title: '',
        nationality: '',
      }),
    },
  })
  const dispatch = useAppDispatch()
  const fullForm = useAppSelector(state => state.order.form)
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'travellers',
  })

  useEffect(() => {
    setValue(
      'travellers',
      Array(capacity).fill({
        name: '',
        dob: new Date(),
        title: '',
        nationality: '',
      })
    )
  }, [capacity, setValue])

  const onError = (error: any) => {
    alert(
      `${Object.keys(error)
        .map(key => vocabulary[key])
        .join(', ')} sind Pflichtfelder`
    )
    console.error('error', errors)
    console.log(error)
  }

  const onSubmit = (formData: Partial<OrderForm>) => {
    const finalForm = prepareOrderFormToApi({
      ...fullForm,
      ...formData,
      travellers:
        formData?.travellers?.map(traveller => ({
          ...traveller,
          dob: Number(traveller.dob),
        })) ?? [],
    })
    dispatch(
      updateForm({
        ...formData,
        travellers:
          formData?.travellers?.map(traveller => ({
            ...traveller,
            dob: Number(traveller.dob),
          })) ?? [],
      })
    )
    dispatch(sendOrderThunk(finalForm))
  }
  const t = useTranslate()

  return (
    <div className={s.container}>
      <div className={s.contactTitle}>{t('tripSteps.contactInfo')}</div>

      <div className={s.contactForm}>
        <Controller
          name='name'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('vouchers.placeholder1')}
              onChange={onChange}
              id='name'
              value={value}
              label={t('forms.inputLabel5')}
              shorten
            />
          )}
        />

        <Controller
          name='title'
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className={s.radio}>
              <div className={s.radioLabel}>{t('contactForm.buttonSave')}*</div>

              <Radio
                name='title*'
                onChange={onChange}
                value={value}
                options={titleOptions}
                classname={s.radioGroup}
              />
            </div>
          )}
        />

        <Controller
          name='email'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('forms.email3')}
              onChange={onChange}
              value={value}
              label={t('forms.inputLabel1')}
              shorten
            />
          )}
        />

        <Controller
          name='phone'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='+41'
              onChange={onChange}
              value={value}
              type='text'
              label={t('forms.inputLabel24')}
              shorten
            />
          )}
        />

        <div className={s.selectWrapper}>
          <div className={s.selectLabel}>{t('forms.inputLabel25')}*</div>
          <Controller
            name='country'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                // @ts-ignore
                value={value}
                options={countries}
                placeholder={t('common.select')}
                classname={s.select}
              />
            )}
          />
        </div>

        <Controller
          name='city'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('worldwideTours.label12')}
              onChange={onChange}
              value={value}
              label={`${t('forms.inputLabel26')}*`}
              required
              shorten
            />
          )}
        />

        <Controller
          name='address'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('worldwideTours.label12')}
              onChange={onChange}
              value={value}
              label={`${t('forms.inputLabel27')} 1*`}
              required
              shorten
            />
          )}
        />

        <Controller
          name='address_2'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('worldwideTours.label12')}
              onChange={onChange}
              value={value}
              label={`${t('forms.inputLabel27')} 2`}
              shorten
            />
          )}
        />

        <Controller
          name='zip_code'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('worldwideTours.label12')}
              onChange={onChange}
              value={value}
              label={`${t('forms.inputLabel28')}*`}
              required
              shorten
            />
          )}
        />
      </div>

      <div className={s.travelersForm}>
        {fields.map((person, index) => (
          <TravelerForm
            key={index}
            field={person}
            control={control}
            index={index}
            countries={countries}
          />
        ))}
      </div>

      <div className={s.messageSection}>
        <Controller
          name='comment'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={t('worldwideTours.label12')}
              onChange={onChange}
              value={value}
              label={t('forms.inputLabel7')}
              shorten
              classname={s.messageInput}
            />
          )}
        />
      </div>

      <div className={s.agentSection}>
        <Controller
          name='is_travel_agent'
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className={s.agentRadio}>
              <div className={s.agentLabel}>{t('common.travelAgent')}?</div>
              <Radio
                name='agent'
                onChange={onChange}
                value={value?.toString()}
                options={booleanOptions}
              />
            </div>
          )}
        />
      </div>

      <div className={s.actions}>
        <Button onClick={handleSubmit(onSubmit, onError)}>
          {t('worldwideTours.submitButton')}
        </Button>
        <Button variant='outline'>{t('changingLocation.cancel')}</Button>
      </div>

      <div className={s.terms}>
        {t('worldwideTours.Privacy1')}{' '}
        <span className={s.link}>
          <Link href='/terms/3'>{t('worldwideTours.Privacy2')}</Link>
        </span>{' '}
        {t('worldwideTours.Privacy3')}{' '}
        <span className={s.link}>
          <Link href='/terms/4'>{t('worldwideTours.Privacy4')}</Link>
        </span>
      </div>

      <div className={s.warning}>
        <WarningIcon />{' '}
        <div className={s.warningText}>{t('tripSteps.warning')}</div>
      </div>
    </div>
  )
}
