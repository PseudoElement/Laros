import { FC } from 'react'
import { useRouter } from 'next/router'

import { Destination } from 'shared/types/destinations'
import {
  getParentDestinations,
  getRootDestinations,
  isRootDestination,
} from 'store/slices/destinations/selectors'
import { mockRegions } from 'shared/mocks/regions'

import World from '/public/assets/images/destinations/World.svg'
import DestinationItem from './DestinationItem'

import _ from 'lodash'
import cn from 'classnames'
import s from './DestinationsList.module.scss'
import getPath from '../../../shared/helpers/getPath'

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

  const isRootDestinations = (destinations: Destination[]): boolean => {
    if (destinations.length) {
      return isRootDestination(destinations[0])
    }

    return true
  }

  const parents = _(mockRegions)
    .filter(item => !item.parentId)
    .value()

  const currentRegion = mockRegions.find(region => region.id === destination)

  const destinationsMocks = currentRegion?.parentId
    ? mockRegions.find(region => region.id === currentRegion.parentId)
        ?.subRegions!
    : parents

  return (
    <div className={s.list}>
      {destinationsMocks.map(region => (
        <DestinationItem key={region.id} region={region} />
      ))}
      {!currentRegion?.parentId && (
        <div
          onClick={() => push(route)}
          className={cn(s.item, { [s.active]: destination === 0 })}
        >
          <World
            className={cn(s.icon, { [s.iconActive]: destination === 0 })}
          />
          <span className={s.title}>Worldwide</span>
        </div>
      )}
    </div>
  )
}
