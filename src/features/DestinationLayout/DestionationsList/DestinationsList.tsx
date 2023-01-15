import { FC } from 'react'
import { useRouter } from 'next/router'

import { Destination } from 'shared/types/destinations'
import { isRootDestination } from 'store/slices/destinations/selectors'
import { mockRegions } from 'shared/mocks/regions'
import { getPath } from 'shared/helpers/getPath'
import { useTranslate } from 'shared/hooks/useTranslate'

import World from '/public/assets/images/destinations/World.svg'
import DestinationItem from './DestinationItem'

import cn from 'classnames'
import s from './DestinationsList.module.scss'

interface DestionationsListProps {
  destinations: Destination[]
  destination: number | null
}
export const DestionationsList: FC<DestionationsListProps> = ({
  destination,
  destinations,
}) => {
  const { push, pathname } = useRouter()
  const route = getPath(pathname)
  const t = useTranslate()

  const isRootDestinations = (destinations: Destination[]): boolean => {
    if (destinations.length) {
      return isRootDestination(destinations)
    }

    return true
  }

  const currentRegion = destinations.find(region => region.id === destination)

  const destinationsList = currentRegion?.parent
    ? destinations
        .map(destination => {
          const mockDestination = mockRegions.find(
            region => region.name === destination.name
          )

          return { ...destination, icon: mockDestination?.icon }
        })
        .filter(destination => destination.name !== 'Saronische inseln')
    : destinations.map(destination => {
        const mockDestination = mockRegions.find(
          region => region.name === destination.name
        )
        return { ...destination, icon: mockDestination?.icon }
      })

  return (
    <div className={s.list}>
      {destinationsList.map(region => (
        <DestinationItem key={region.id} region={region} />
      ))}
      {isRootDestinations(destinations) && (
        <div
          onClick={() => push(`/destinations/${route}`)}
          className={cn(s.item, { [s.active]: destination === 0 })}
        >
          <World
            className={cn(s.icon, { [s.iconActive]: destination === 0 })}
          />
          <span className={s.title}>{t('destinationWorldWide.title')}</span>
        </div>
      )}
    </div>
  )
}
