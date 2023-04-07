import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Controller, useForm, useFieldArray } from 'react-hook-form'

import { InputCalendar, Input, Button } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { PeopleCapacity } from 'shared/types/order'

import trash from '/public/assets/images/Trash.svg?url'
import add from '/public/assets/images/plus.svg?url'

import s from './StartTripForm.module.scss'

export type FieldsType = {
  rooms: PeopleCapacity[]
  date: Date | Date[]
}

interface StartTripFormProps {
  onChange: (fields: FieldsType) => void
  variant?: 'trips' | 'hotels'
}

export const StartTripForm: FC<StartTripFormProps> = ({
  onChange,
  variant = 'hotels',
}) => {
  const t = useTranslate()
  const [currentDate, setCurrentDate] = useState<Date[]>([
    new Date(),
    new Date(),
  ])
  const [tripDate, setTripDate] = useState<Date>(new Date())

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fields: [{ adults: 1, children: 0 }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  })

  const onSubmit = (formData: { fields: PeopleCapacity[] }) => {
    onChange?.({
      rooms: formData.fields,
      date: variant === 'trips' ? tripDate : currentDate,
    })
  }

  const setDate = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      setCurrentDate(date)
    } else {
      setTripDate(date)
    }
  }

  return (
    <div>
      <div className={s.calendar}>
        {variant === 'trips' ? (
          <InputCalendar
            label={t('hotel.calendar')}
            variant={'right'}
            onChange={setDate}
            value={tripDate}
          />
        ) : (
          <InputCalendar
            label={t('hotel.calendar')}
            variant={'double'}
            onChange={setDate}
            doubleValue={currentDate}
            isMulti={true}
          />
        )}
      </div>

      <form>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div className={s.optionWrap}>
                <div className={s.optionTitle}>
                  {t('tripSteps.room')} {index + 1}
                </div>

                {fields.length > 1 && (
                  <button
                    className={s.trash}
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <Image src={trash} alt='trash' width={25} height={25} />
                  </button>
                )}
              </div>

              <div className={s.numberInputWrap}>
                <Controller
                  name={`fields.${index}.adults`}
                  control={control}
                  rules={{ required: true }}
                  defaultValue={1}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type={'number'}
                      withCounter={true}
                      label={t('hotel.counter1')}
                      value={value}
                      onChange={onChange}
                      classname={s.numberInput}
                      min={1}
                    />
                  )}
                />

                <Controller
                  name={`fields.${index}.children`}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type={'number'}
                      onChange={onChange}
                      withCounter={true}
                      label={t('hotel.counter2')}
                      value={value}
                      classname={s.numberInput}
                    />
                  )}
                />
              </div>
            </div>
          )
        })}
      </form>

      <div
        className={s.addRoom}
        onClick={() =>
          append({
            adults: 1,
            children: 0,
          })
        }
      >
        <div className={s.addRoomWrap}>
          <span>
            <Image src={add} alt='' width={20} height={20} />
          </span>
          <div className={s.optionTitle}>{t('hotel.add')}</div>
        </div>
      </div>

      <Button classname={s.startTripButton} onClick={handleSubmit(onSubmit)}>{t('hotel.buttonStart')}</Button>
    </div>
  )
}
