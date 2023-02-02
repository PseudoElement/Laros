import { FC } from 'react'
import { useRouter } from 'next/router'

import { ContactForm } from 'features'
import { Highlighted } from './Highlighted'
import { OverviewSection } from './Overview'

import { useAppSelector } from 'shared/hooks/redux'

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
          backgroundImage: `url(${travelPlannerInfo?.images[1]})`,
        }}
      />

      <div className={s.OverviewSection}>
        <h1 className={s.title}>{travelPlannerCategory?.name ?? null}</h1>
        {travelPlannerInfo?.overview ? (
          <OverviewSection
            overview={travelPlannerInfo?.overview}
            description={travelPlannerCategory?.description}
          />
        ) : null}
      </div>

      {travelPlannerInfo?.highlighted ? (
        <Highlighted {...travelPlannerInfo.highlighted} />
      ) : null}

      <div className={s.contactForm}>
        <ContactForm />
      </div>
    </>
  )
}
