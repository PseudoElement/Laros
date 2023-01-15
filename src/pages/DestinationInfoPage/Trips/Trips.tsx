import { FC } from 'react'
import { useRouter } from 'next/router'

import { Slider } from 'components'
import { TripCard } from 'features'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Trip } from 'shared/types/trip'

import s from './Trips.module.scss'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import {
  LAPTOP_SCREEN,
  TABLET_MAX_SCREEN,
  TABLET_MIN_SCREEN,
} from 'shared/constants/screenResolutions'

interface TripsProps {
  trips: Trip[]
  title: string | undefined
  subTitle: string
}

export const Trips: FC<TripsProps> = ({ trips, title, subTitle }) => {
  const { push } = useRouter()

  const handlePush = (id: number) => {
    push(`/trips/${id}`)
  }

  const t = useTranslate()
  const { width } = useWindowDimensions()

  return (
    <div className={s.trips}>
      <div className={s.title}>
        {t('areaPage.pre-definedTrips')} {title}
      </div>

      <div className={s.subTitle}>{subTitle}</div>

      <Slider
        slidesPerView={
          width > LAPTOP_SCREEN ? 3 : width > TABLET_MAX_SCREEN ? 2 : 1
        }
        withPagination
        classname={s.slider}
        spaceBetween={30}
        withNavigation={width > TABLET_MIN_SCREEN}
      >
        {trips?.map(item => (
          <TripCard key={item.id} {...item} onClick={handlePush} />
        ))}
      </Slider>
    </div>
  )
}
