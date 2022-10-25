import { FC } from 'react'
import { Destination } from 'shared/types/destinations'
import s from './DestinationsList.module.scss'
import cn from 'classnames'
import { useAppDispatch } from 'shared/hooks/redux'
import { isRootDestination } from 'store/slices/destinations/selectors'
import { useRouter } from 'next/router'
interface DestionationsListProps {
  destinations: Destination[]
  destination: number | null
}
export const DestionationsList: FC<DestionationsListProps> = ({
  destination,
  destinations,
}) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const isRootDestinations = (destinations: Destination[]): boolean => {
    if (destinations.length) {
      return isRootDestination(destinations[0])
    }

    return true
  }

  return (
    <div className={s.list}>
      {destinations.map(place => {
        return (
          <div
            key={place.id}
            onClick={() => router.push(`/destinations/${place.id}`)}
            className={cn(s.item, { [s.active]: place.id === destination })}
          >
            <span className={s.title}>{place.name}</span>
          </div>
        )
      })}
      {isRootDestinations(destinations) && (
        <div
          onClick={() => router.push('/destinations')}
          className={cn(s.item, { [s.active]: destination === 0 })}
        >
          <span className={s.title}>World</span>
        </div>
      )}
    </div>
  )
}
