import { FC } from 'react'

import { Slider } from 'components'
import { TripCard } from 'features'

import { Trip } from 'shared/types/trip'

import s from './Trips.module.scss'

interface TripsProps {
  trips: Trip[]
}

export const Trips: FC<TripsProps> = ({ trips }) => {
  return (
    <div className={s.trips}>
      <div className={s.title}>Pre-defined trips in Tessaloniki</div>

      <div className={s.subTitle}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </div>

      <div className={s.slider}>
        <Slider
          slidesPerView={3}
          withPagination={true}
        >
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
