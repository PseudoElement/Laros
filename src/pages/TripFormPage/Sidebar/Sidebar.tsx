import React, { FC, useState } from 'react'
import Image from 'next/image'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

import {
  Button,
  CalendarIcon,
  Input,
  InputCalendar,
  Map,
  Modal,
} from 'components'
import { ContactForm } from 'features'

import { dateFormatter } from 'shared/helpers/dateFormatter'
import { useTranslate } from 'shared/hooks/useTranslate'
import { updateForm } from 'store/slices/order/order'
import { useAppDispatch } from 'shared/hooks/redux'
import { useModal } from 'shared/hooks/useModal'

import { monthsFull } from 'components/InputCalendar/consts'
import { PeopleCapacity } from 'shared/types/order'

import bed from '/public/assets/images/bed.svg?url'
import people from '/public/assets/images/people.svg?url'
import pencil from '/public/assets/images/pencilBlue.svg?url'
import coin from '/public/assets/images/Coin.svg?url'
import download from '/public/assets/images/download.svg?url'
import add from '/public/assets/images/plus.svg?url'
import trash from '/public/assets/images/Trash.svg?url'

import s from './Sidebar.module.scss'
import { countPeople } from 'shared/helpers/trip'

export interface SideBarProps {
  route: string | null
  travel_date: number | string | Date
  rooms: PeopleCapacity[]
  total: number
  dirtyPrice: number | null
  is_early_booking: boolean
  handleDownload?: () => void
  handleNextStep?: () => void
  step: number
}

export const Sidebar: FC<SideBarProps> = ({
  route,
  travel_date,
  rooms,
  total,
  dirtyPrice,
  is_early_booking,
  handleDownload,
  handleNextStep,
  step,
}) => {
  const t = useTranslate()
  const dispatch = useAppDispatch()
  const [editDate, setEditDate] = useState(false)
  const [editRooms, setEditRooms] = useState(false)
  const [currentDate, setCurrentDate] = useState<Date>(new Date(travel_date))

  // cancel edit
  const handleCancel = () => {
    setEditDate(false)
    setEditRooms(false)
  }

  // edit date
  const setDate = (date: Date | Date[]) => {
    if (!Array.isArray(date)) {
      setCurrentDate(date)
    }
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fields: [{ adults: 0, children: 0 }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  })

  // save changes
  const onSubmit = (formData: any) => {
    dispatch(
      updateForm({
        rooms: formData.fields,
        date_start: currentDate.toString(),
        // date_start: [Number(currentDate[0]), Number(currentDate[1])], //TODO fix when fix api
      })
    )
    handleCancel()
  }

  // open contact us modal
  const contactUsModal = useModal()
  const handleContact = () => {
    contactUsModal.open()
  }

  return (
    <div className={s.sidebar}>
      <div className={s.map}>{route ? <Map route={route} /> : null}</div>

      <div className={s.sidebarWrap}>
        <div className={editRooms || editDate ? s.bgWhite : ''}>
          {/* date calendar and edit date*/}
          <div className={s.section}>
            {!editDate ? (
              <>
                <div className={s.icon}>
                  <CalendarIcon width={20} height={20} />
                </div>

                <div className={s.sectionWrap}>
                  <div className={s.label}>{t('forms.inputLabel20')}</div>
                  <div className={s.content}>
                    {dateFormatter(new Date(travel_date), monthsFull)}
                  </div>
                </div>

                <div className={s.pencil} onClick={() => setEditDate(true)}>
                  <Image src={pencil} width={14} height={14} alt='edit' />
                </div>
              </>
            ) : (
              <div className={s.calendar}>
                <InputCalendar
                  label={t('forms.inputLabel20')}
                  variant={'right'}
                  onChange={setDate}
                  value={currentDate}
                />
              </div>
            )}
          </div>

          {/* adults and children */}
          <div className={s.section}>
            {!editRooms ? (
              <>
                <div className={s.icon}>
                  <Image src={people} width={25} height={25} alt='image' />
                </div>

                <div className={s.sectionWrap}>
                  <div className={s.label}>{t('forms.inputLabel32')}:</div>
                  <div className={s.content}>
                    {countPeople(rooms, 'adults')} {t('forms.inputNumber1')},{' '}
                    {countPeople(rooms, 'children')} {t('forms.inputNumber2')}
                  </div>
                </div>

                <div className={s.pencil} onClick={() => setEditRooms(true)}>
                  <Image src={pencil} width={14} height={14} alt='edit' />
                </div>
              </>
            ) : (
              <form>
                {/* edit adults and children */}
                {fields.map((field, index) => {
                  return (
                    <div key={field.id} className={s.fields}>
                      <div className={s.optionTitle}>
                        {t('tripSteps.room')} {index + 1}
                      </div>

                      <div className={s.numberInputWrap}>
                        <Controller
                          name={`fields.${index}.adults`}
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { onChange, value } }) => (
                            <Input
                              type={'number'}
                              withCounter={true}
                              label={t('hotel.counter1')}
                              value={value}
                              onChange={onChange}
                              classname={s.numberInput}
                            />
                          )}
                        />
                      </div>
                      <div className={s.trash} onClick={() => remove(index)}>
                        <Image src={trash} alt='trash' width={25} height={25} />
                      </div>
                    </div>
                  )
                })}
              </form>
            )}
          </div>

          {/* rooms and edit rooms*/}
          <div className={s.section}>
            {!editRooms ? (
              <>
                <div className={s.icon}>
                  <Image src={bed} width={25} height={25} alt='image' />
                </div>

                <div className={s.sectionWrap}>
                  <div className={s.label}>{t('forms.inputLabel33')}:</div>
                  <div className={s.content}>
                    {rooms.length} {t('common.rooms')}
                  </div>
                </div>

                <div className={s.pencil} onClick={() => setEditRooms(true)}>
                  <Image src={pencil} width={14} height={14} alt='edit' />
                </div>
              </>
            ) : (
              <div
                className={s.addRoom}
                onClick={() =>
                  append({
                    adults: 0,
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
            )}
          </div>

          {/* edit save changes or cancel buttons*/}
          {editDate || editRooms ? (
            <div className={s.editButtons}>
              <Button
                classname={s.saveChangesButton}
                onClick={handleSubmit(onSubmit)}
              >
                {t('tripSteps.save')}
              </Button>

              <Button classname={s.cancelButton} onClick={handleCancel}>
                {t('tripSteps.cancel')}
              </Button>
            </div>
          ) : null}
        </div>

        {/* total prices section */}
        <div className={s.sectionTotal}>
          <div className={s.icon}>
            <Image src={coin} width={25} height={25} alt='image' />
          </div>

          <div className={s.sectionWrap}>
            {rooms.length ? (
              <div className={s.label}>
                {total *
                  (countPeople(rooms, 'adults') +
                    countPeople(rooms, 'children'))}{' '}
                CHF {t('tripSteps.total')}
              </div>
            ) : null}

            <div className={s.content}>
              {dirtyPrice ? (
                <>
                  <span>{dirtyPrice}</span> {total} CHF /{' '}
                  {t('tripSteps.person')}
                </>
              ) : (
                `${total} CHF / ${t('tripSteps.person')}`
              )}
            </div>
          </div>
        </div>
        {is_early_booking && (
          <div className={s.earlyBookingMessage}>
            {t('tripSteps.earlyBookingMessage')}
          </div>
        )}

        {/* nex step and download buttons */}
        <div className={s.buttonSection}>
          {!step && (
            <Button classname={s.nextButton} onClick={handleNextStep}>
              {t('tripSteps.next')}
            </Button>
          )}

          {handleDownload ? (
            <Button classname={s.uploadButton} onClick={handleDownload}>
              <Image alt='download' src={download} width={20} height={20} />
              <span>{t('tripSteps.download')}</span>
            </Button>
          ) : null}
        </div>

        {/* text and link contact us */}
        {!step && (
          <div className={s.link}>
            {t('tripSteps.contactUs')}
            <span onClick={handleContact}> {t('tripSteps.contactUs2')}</span>
          </div>
        )}
      </div>

      <Modal isOpen={contactUsModal.isOpen} onClose={contactUsModal.onClose}>
        <ContactForm />
      </Modal>
    </div>
  )
}
