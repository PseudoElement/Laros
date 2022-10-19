import { Swiper, SwiperSlide } from 'swiper/react'

import s from './Slider.module.scss'
import { A11y, Navigation, Pagination } from 'swiper'
import { CategoryCard } from '../../pages/TravelPlannerPage/CategoryCard'
import { moreCategoriesMock } from '../../shared/mocks/tripPlanner'
import { FC } from 'react'

interface ISliderProps {
  title: string
  description?: string
  marginTop: string
}

const mainCategories = moreCategoriesMock

export const Slider: FC<ISliderProps> = ({ title, description, marginTop }) => {
  return (
    <div className={s.slider}>
      <h3 className={s.title}>{title}</h3>
      {description && <p className={s.description}>{description}</p>}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {mainCategories.map((cat, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className={s.slideItem}>
                <CategoryCard {...cat} vertical key={idx} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
