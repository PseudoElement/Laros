import { FC } from 'react'
import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import s from './TravelPlannerPage.module.scss'
import { CategoryCard } from './CategoryCard/CategoryCard'
import { Slider } from 'features'
import bg from '/public/assets/images/trip_planner_bg.png'
export const TravelPlannerPage: FC = () => {
  const moreCategories = moreCategoriesMock
  return (

    <div className={s.container}>
      <div className={s.bg} style={{
        backgroundImage: `url(${bg.src})`,
      }}>
      </div>
      <div className={s.title}>Travel planner</div>
      <div
        className={s.content}
      >
        <Slider>
          {moreCategoriesMock.map((card, id) => {
            return <CategoryCard {...card} key={id} vertical />
          })}
        </Slider>

        <div className={s.subtitle}>Our top trip categories</div>
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
    </div>
  )
}
