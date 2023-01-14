import { FC, ReactNode } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import s from './SliderGalery.module.scss'

interface AboutSliderProps {
  children: ReactNode[] | string[]
  spaceBetween?: number
  slidesPerView?: number
  onSlice?: number
}

export const SliderGalery: FC<AboutSliderProps> = ({
  children,
  spaceBetween = 8,
  slidesPerView = 1.5,
  onSlice = 0,
}) => {
  return (
    <div className={s.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        initialSlide={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {children.slice(onSlice, children.length).map((child, index) => (
          <SwiperSlide key={index}>
            <div className={s.slide}>{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
