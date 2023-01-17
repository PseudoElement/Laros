import { FC } from 'react'
import { useRouter } from 'next/router'

import { ContactForm } from 'features'
import { Highlighted } from './Highlighted'
import { OverviewSection } from './Overview'

import { useAppSelector } from 'shared/hooks/redux'
import { withDomain } from 'shared/helpers/withDomain'

import { StaticTravelMock } from 'shared/mocks/staticTravel'

import s from './StaticTravelPlannerPage.module.scss'

export const StaticTravelPlannerPage: FC = () => {
  const { query } = useRouter()

  const travelPlannerInfo = StaticTravelMock.find(
    page => page.id === (query.index && +query.index)
  )

  const travelPlannerCategory = useAppSelector(
    state => state.trips.categories
  ).find(page => page.id === (query.index && +query.index))

  return (
    <>
      <div
        className={s.grayBackground}
        style={{
          backgroundImage: `url(${
            travelPlannerCategory?.images?.length
              ? withDomain(travelPlannerCategory?.images[1])
              : null
          })`,
        }}
      />
      <div className={s.OverviewSection}>
        <h1 className={s.title}>Luxury & Yachting Services</h1>
        <OverviewSection
          cards={
            travelPlannerInfo?.overview
              ? travelPlannerInfo.overview
              : StaticTravelMock[0].overview
          }
        />
      </div>

      <Highlighted
        highlighted={
          travelPlannerInfo?.highlighted
            ? travelPlannerInfo.highlighted
            : StaticTravelMock[0].highlighted
        }
      />

      <div className={s.contactForm}>
        <ContactForm />
      </div>
    </>
  )
}
