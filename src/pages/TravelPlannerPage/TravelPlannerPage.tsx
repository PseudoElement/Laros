import Link from 'next/link'
import { FC } from 'react'
import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import SwiperCore, {
  A11y,
  EffectFlip,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper'

import { CategoryCard } from './CategoryCard/CategoryCard'
import s from './TravelPlannerPage.module.scss'
export const TravelPlannerPage: FC = () => {
  const mainCategories = moreCategoriesMock
  const moreCategories = moreCategoriesMock
  return (
    <>
      <div className={s.background}>
        <h1 className={s.title}>Travel planner</h1>
      </div>

      <div className={s.content}>
        <div className={s.container}>
          <div>
            <span className={s.subtitle}>Our top trip categories</span>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {mainCategories.map((cat, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className={s.slideItem}>
                  <CategoryCard {...cat} vertical />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className={s.categories}>
          <div className={s.categoriesMore}>
            <span>More categories</span>
          </div>
        </div>
        <ul className={s.categoriesList}>
          {moreCategories.map(cat => {
            return <CategoryCard {...cat} />
          })}
        </ul>
      </div>
    </>
  )
}
