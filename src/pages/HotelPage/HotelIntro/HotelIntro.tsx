import { FC } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { FieldsType, StartTripForm, InfoTags, ContactForm } from 'features'
import { Map, Modal, TruncatedText } from 'components'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'
import { useTranslate } from 'shared/hooks/useTranslate'
import { useModal } from 'shared/hooks/useModal'

import { Hotel } from 'shared/types/hotel'
import { TRIP_PLAN_DESCRIPTION_SIZE } from 'shared/constants'

import s from './HotelIntro.module.scss'

export const HotelIntro: FC<Hotel> = ({
  description,
  destination_name,
  rating,
  tags,
  location,
  address,
  lrweb,
  id,
}) => {
  const dispatch = useAppDispatch()
  const form = useAppSelector(state => state.order.form)
  const { push } = useRouter()
  const t = useTranslate()
  const { onClose, isOpen, open } = useModal()

  const handleClick = (fields: FieldsType) => {
    Array.isArray(fields.date)
      ? dispatch(
          updateForm({
            rooms: fields.rooms,
            date_start: Number(fields.date[0]),
            // date_start: [Number(fields.date[0]), Number(fields.date[1])], //TODO fix when fix api
          })
        )
      : null
    // push(`/trip_form/hotel/${id}`) // TODO revert when trip planner is done
    // push(`/contact/`)
    open()
  }

  return (
    <>
      <div className={s.hotelIntro}>
        <div className={s.left}>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor='#f2c94c'
            edit={false}
            classNames={s.rating}
          />

          <div className={s.address}>{address}</div>

          <div className={s.name}>{lrweb}</div>

          {description ? (
            <TruncatedText limit={TRIP_PLAN_DESCRIPTION_SIZE}>
              {description}
            </TruncatedText>
          ) : null}

          <div className={s.forms}>
            <StartTripForm onChange={handleClick} />
          </div>
        </div>

        <div className={s.right}>
          <div className={s.map}>
            <Map location={location} />
          </div>

          <div className={s.tagsPanel}>
            {tags?.length ? (
              <>
                <div className={s.tagsTitle}>{t('hotel.tagsTitle')}:</div>
                <InfoTags tags={tags} limit={4} />
              </>
            ) : null}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={t('contactForm.formTitle')}
        classname={s.modalWrap}
      >
        <div className={cn(s.modal, ['scrollStyle'])}>
          {/* @ts-ignore */}
          <ContactForm
            order={{
              ...form,
              message: `Request for hotel ${lrweb}, located in ${destination_name}, hotel id - ${id}`,
            }}
          />
        </div>
      </Modal>
    </>
  )
}
