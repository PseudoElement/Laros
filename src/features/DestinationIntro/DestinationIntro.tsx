import { FC } from 'react'

import { Map, Tag, TruncatedText } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Destination } from 'shared/types/destinations'
import { TRIP_PLAN_DESCRIPTION_SIZE } from 'shared/constants'

import s from './DestinationIntro.module.scss'

export const DestinationIntro: FC<Destination> = ({
  id,
  name,
  location,
  description,
  airport,
  location_name,
  highlights,
  tips,
  parent,
  images,
  travel_types,
  is_island,
  fee,
  is_active,
  title,
}) => {
  const t = useTranslate()

  return (
    <div className={s.intro}>
      <div className={s.introLeftContainer}>
        <div className={s.address}>{location_name}</div>
        <div className={s.name}>{name}</div>
        <div className={s.title}>{title}</div>

        {description ? (
          <TruncatedText limit={TRIP_PLAN_DESCRIPTION_SIZE}>
            {description}
          </TruncatedText>
        ) : null}

        <div className={s.tagsTitle}>
          {t('travelPlannerTripPlan.highlights')}:
        </div>
        <div className={s.tagPanel}>
          {highlights?.map((item, index) => (
            <div key={index} className={s.tag}>
              <Tag name={item} id={index} />
            </div>
          ))}
        </div>
      </div>

      <div className={s.introRightContainer}>
        {location ? <Map location={location} /> : null}
      </div>
    </div>
  )
}
