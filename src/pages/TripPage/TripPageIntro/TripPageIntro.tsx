import { FC } from 'react'
import { useRouter } from 'next/router'

import { StartTripForm, InfoTags, FieldsType } from 'features'
import { Map, TruncatedText } from 'components'

import { useAppDispatch } from 'shared/hooks/redux'
import { updateForm } from 'store/slices/order/order'
import { useTranslate } from 'shared/hooks/useTranslate'

import { Trip } from 'shared/types/trip'

import { TRIP_PLAN_DESCRIPTION_SIZE } from 'shared/constants'

import s from './tripPageIntro.module.scss'

export const TripPageIntro: FC<Trip> = ({
  id,
  name,
  tags,
  price,
  price_per_person_chf,
  route,
  description,
}) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const t = useTranslate()

  const handleClick = (fields: FieldsType) => {
    dispatch(
      updateForm({
        rooms: fields.rooms,
        date_start: fields.date.toString(),
      })
    )
    push(`/trip_form/${id}`)
  }

  return (
    <div className={s.pageIntro}>
      <div className={s.left}>
        <div className={s.name}>{name}</div>
        <div className={s.price}>
          {price_per_person_chf} CHF / {t('travelPlannerTripPlan.proPerson')}
        </div>

        <TruncatedText
          className={s.description}
          limit={TRIP_PLAN_DESCRIPTION_SIZE}
        >
          {description}
        </TruncatedText>

        <StartTripForm onChange={handleClick} variant={'trips'} />
      </div>

      <div className={s.right}>
        <div className={s.map}>
          <Map route={route ?? ''} />
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
  )
}
