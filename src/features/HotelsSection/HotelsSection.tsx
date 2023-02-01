import { FC } from 'react'

import { HotelCard } from 'features'
import { Slider } from 'components'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { TABLET_SCREEN } from 'shared/constants/screenResolutions'

import { Hotel } from 'shared/types/hotel'

import s from './HotelSection.module.scss'

interface HotelSection {
  hotels: Hotel[]
  title?: string
  subTitle?: string
}

export const HotelSection: FC<HotelSection> = ({ hotels, title, subTitle }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.hotelSection}>
      <div className={s.title}>{title}</div>

      <div className={s.subTitle}>{subTitle}</div>

      <div className={s.wrap}>
        {hotels.length ? (
          <Slider
            classname={s.hotelSlider}
            withNavigation={width > TABLET_SCREEN}
            withPagination
            spaceBetween={30}
            nextEl={s.nextButton}
            prevEl={s.prevButton}
            slidesPerView={width > 1310 ? undefined : width > 950 ? 2 : 1}
          >
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  )
}
