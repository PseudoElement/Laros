import { FC } from 'react'

import { AreaCard } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Destination } from 'shared/types/destinations'
import { LIMIT_NEARBY_DESTINATIONS } from 'shared/constants'

import { useRouter } from 'next/router'

import s from './NearbyDestinations.module.scss'

interface DestinationProps {
  destination: Destination[]
}

export const NearbyDestinations: FC<DestinationProps> = ({ destination }) => {
  const t = useTranslate()
  const { push } = useRouter()

  const handlePush = (id: number) => {
    push(`/destinations/${id}`)
  }

  return (
    <div className={s.destination}>
      <div className={s.destinationTitle}>{t('hotel.nearbyTitle')}</div>

      <div className={s.destinationSubTitle}>{t('hotel.nearbySubTitle')}</div>

      <div className={s.destinationWrap}>
        {destination
          ?.slice(0, LIMIT_NEARBY_DESTINATIONS)
          .map((destination, index) => {
            return (
              <AreaCard
                className={s.destinationItem}
                onClick={handlePush}
                key={destination.id}
                id={destination.id}
                name={destination.name}
                image={destination.images[0]}
              />
            )
          })}
      </div>
    </div>
  )
}
