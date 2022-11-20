import React, { FC } from 'react'
import { useRouter } from 'next/router'

import { HotelCard } from 'features'
import { Slider } from 'components'

import { Hotel } from 'shared/types/hotel'

import s from './HotelSection.module.scss'

interface HotelSection {
  hotels: Hotel[]
  title?: string
  subTitle?: string
}

export const HotelSection: FC<HotelSection> = ({ hotels, title, subTitle }) => {
  const route = useRouter()

  const handlePush = (id: number) => {
    route.push(`/hotels/${id}`)
  }

  return (
    <div className={s.hotelSection}>
      <div className={s.title}>{title}</div>

      <div className={s.subTitle}>{subTitle}</div>

      <div className={s.wrap}>
        {hotels.length ? (
          <Slider
            withNavigation
            withPagination
            nextEl={s.nextButton}
            prevEl={s.prevButton}
          >
            {hotels.map((hotel, index) => (
              <div className={s.hotelCard} key={index}>
                <HotelCard key={index} {...hotel} onClick={handlePush} />
              </div>
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  )
}
