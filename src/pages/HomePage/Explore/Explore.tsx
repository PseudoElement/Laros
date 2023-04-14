import React, { FC } from 'react'
import { useRouter } from 'next/router'

import { Destination } from 'shared/types/destinations'
import { useTranslate } from 'shared/hooks/useTranslate'

import { withDomain } from 'shared/helpers/withDomain'

import { HOME_DESTS_IDS } from 'shared/constants/destinations'

import s from './Explore.module.scss'

interface ExploreProps {
  destinations: Destination[]
}

export const Explore: FC<ExploreProps> = ({ destinations }) => {
  const t = useTranslate()
  const { push } = useRouter()

  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <h2 className={s.title}>{t('homepage.newPlacesTitle')}</h2>
        <p className={s.subtitle}>{t('homepage.newPlacesSubTitle')} </p>
      </div>

      <div className={s.images}>
        {HOME_DESTS_IDS.map(item => {
          const destination = destinations.find(des => des.id === item)
          return (
            <div
              className={s.exploreItem}
              onClick={() => push(`/areas/${destination?.id}`)}
              style={
                destination?.images.length
                  ? {
                      backgroundImage: `url(${withDomain(
                        destination.images[destination.images.length - 1]
                      )})`,
                      backgroundSize: 'cover',
                    }
                  : { backgroundColor: '#9c9ea1' }
              }
              key={destination?.id}
            >
              <div className={s.shadow}>{''}</div>
              <span className={s.itemName}>{destination?.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
