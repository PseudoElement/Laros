import { FC } from 'react'
import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { CategoryCard } from './CategoryCard/CategoryCard'
import s from './TravelPlannerPage.module.scss'
import { TripList } from '../TripList'

import { Slider } from '../../features'
export const TravelPlannerPage: FC = () => {
  const moreCategories = moreCategoriesMock
  return (
    <>
      <div className={s.background}>
        <h1 className={s.title}>Travel planner</h1>
      </div>

      <div
        className={s.content}
        style={{
          marginBottom: '40px',
        }}
      >
        <Slider>
          {moreCategoriesMock.map((card, id) => {
            return <CategoryCard {...card} key={id} vertical />
          })}
        </Slider>
      </div>

      <div className={s.content}>
        <div className={s.container}>
          <div>
            <span className={s.subtitle}>Our top trip categories</span>
          </div>
        </div>

        <div className={s.categories}>
          <div className={s.categoriesMore}>
            <span>More categories</span>
          </div>
        </div>
        <ul className={s.categoriesList}>
          {moreCategories.map((cat, i) => {
            return <CategoryCard {...cat} key={i} />
          })}
        </ul>
      </div>
    </>
  )
}
