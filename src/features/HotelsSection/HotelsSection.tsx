import React, { FC } from 'react'

import { HotelCard } from 'features/HotelCard'
import { Slider } from 'components/Slider'

import { Hotel } from 'shared/types/hotel'

import s from './HotelSection.module.scss'

interface HotelSection {
  hotels: Hotel[]
  title?: string
  subTitle?: string
}

export const HotelSection: FC<HotelSection> = ({ hotels, title, subTitle }) => {
  return (
    <div className={s.hotelSection}>
      <div className={s.title}>{title}</div>

      <div className={s.subTitle}>{subTitle}</div>

      <div className={s.wrap}>
        {hotels.length ? (
          <Slider
            withNavigation={true}
            withPagination={true}
            nextEl={s.nextButton}
            prevEl={s.prevButton}
          >
            {hotels.map((hotel, index) => (
              <div className={s.hotelCard}>
                <HotelCard key={index} {...hotel} />
              </div>
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  )
}
