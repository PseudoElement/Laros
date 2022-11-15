import { FC } from 'react'

import { Slider } from 'components'
import { TripCard } from 'features'

import { Trip } from 'shared/types/trip'

import s from './Trips.module.scss'

interface TripsProps {
  trips: Trip[]
  title: string
  subTitle: string
}

export const Trips: FC<TripsProps> = ({ trips, title, subTitle }) => {
  return (
    <div className={s.trips}>
      <div className={s.title}>Pre-defined trips in {title}</div>

      <div className={s.subTitle}>{subTitle}</div>

      <div>
        <Slider slidesPerView={3} withPagination classname={s.slider}>

          {trips?.map((item, index) => (
            <div className={s.tripCard} key={index}>
              <TripCard {...item} onClick={() => {}} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
