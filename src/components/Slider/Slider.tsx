import { Swiper, SwiperSlide } from 'swiper/react'

import s from './Slider.module.scss'
import { A11y, Navigation, Pagination } from 'swiper'
import { FC, ReactNode } from 'react'

interface SliderProps {
  children: ReactNode[]
  slidesPerView?: number
  withNavigation?: boolean
  withPagination?: boolean
}

export const Slider: FC<SliderProps> = ({
  children,
  slidesPerView = 3,
  withNavigation = false,
  withPagination = false,
}) => {
  const paginationOptions = withPagination && { clickable: true }
  const navigationOptions = withNavigation && {}
  return (
    <div className={s.slider}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        navigation={navigationOptions}
        pagination={paginationOptions}
      >
        {children.length
          ? children.map((child, idx) => (
              <SwiperSlide key={idx}>{child}</SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  )
}
