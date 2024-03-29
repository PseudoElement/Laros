import { FC } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { AreaCard } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Destination } from 'shared/types/destinations'

import s from './AreasOf.module.scss'
import { useAppSelector } from 'shared/hooks/redux'
import { getRootRegion } from 'store/slices/destinations/selectors'

interface DestinationsProps {
  destinations: Destination[]
  destination: Destination
  className?: string
  isAreas?: boolean
}

export const AreasOf: FC<DestinationsProps> = ({
  destinations,
  destination,
  isAreas = false,
  className,
}) => {
  const { push } = useRouter()
  const t = useTranslate()

  const handlePush = (id: number) => {
    isAreas ? push(`/areas/${id}`) : push(`/destinations/areas/${id}`)
  }

  const rootRegion = useAppSelector(state =>
    getRootRegion(state.destinations.destinations, destination?.parent)
  )

  return (
    <div className={cn(s.wrapper, className)}>
      {rootRegion?.name && (
        <div className={s.title}>
          {t('travelPlannerTripPlan.areasOfTitle')} {rootRegion?.name}
        </div>
      )}

      {destination.description && (
        <div className={s.description}>{destination.description}</div>
      )}

      <div className={s.images}>
        {destinations?.map(item => (
          <AreaCard
            onClick={handlePush}
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.images[0]}
          />
        ))}
      </div>
    </div>
  )
}
