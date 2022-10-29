import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Destination } from 'shared/types/destinations'
import { useAppDispatch } from 'shared/hooks/redux'
import { isRootDestination } from 'store/slices/destinations/selectors'
import { mockRegions } from 'shared/mocks/regions'

import world from '/public/assets/images/destinations/world.png'

import s from './DestinationsList.module.scss'
import cn from 'classnames'

interface DestionationsListProps {
  destinations: Destination[]
  destination: number | null
}
export const DestionationsList: FC<DestionationsListProps> = ({
  destination,
  destinations,
}) => {
  const dispatch = useAppDispatch()
  const { push, query } = useRouter()

  const isRootDestinations = (destinations: Destination[]): boolean => {
    if (destinations.length) {
      return isRootDestination(destinations[0])
    }

    return true
  }

  return (
    <div className={s.list}>
      {mockRegions.map(place => {
        return (
          <div
            key={place.id}
            onClick={() => push(`/destinations/${place.id}`)}
            className={cn(s.item, {
              [s.active]: place.id === Number(query.id),
            })}
          >
            <Image alt='' src={place.image} />
            <span className={s.title}>{place.name}</span>
          </div>
        )
      })}
      {isRootDestinations(destinations) && (
        <div
          onClick={() => push('/destinations')}
          className={cn(s.item, { [s.active]: destination === 0 })}
        >
          <Image alt='' src={world} />
          <span className={s.title}>Worldwide</span>
        </div>
      )}
    </div>
  )
}
