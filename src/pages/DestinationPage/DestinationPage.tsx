import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

import { DestinationLayout } from 'features/DestinationLayout'
import DestinationAreas from 'features/DestinationAreas/DestinationAreas'
import DestinationHotels from 'features/DestinationHotels/DestinationHotels'

import { Map, getCurrentMap } from 'shared/helpers/getMap'
import getPath from 'shared/helpers/getPath'

import Arrow from '/public/assets/images/blackArrow.svg'

import s from './DestinationPage.module.scss'

export const DestinationPage: FC = () => {
  const dispatch = useAppDispatch()
  const { query, pathname, push } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )
  const [map, setMap] = useState<Map | null>(null)

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [])

  useEffect(() => {
    const map = getCurrentMap(Number(query.id))

    setMap(map)
  }, [query.id])

  const route = getPath(pathname)
  const title = !map?.currentMap?.parentId
    ? route.split('/')[2] !== 'areas'
      ? 'Hotels'
      : 'Destination'
    : map.currentMap.name

  return (
    <>
      <DestinationLayout
        currentDestination={Number(query.id)}
        destinations={destinations}
        title={title}
      >
        {map?.currentMap && (
          <>
            {map.currentMap.parentId && map.parent && (
              <div
                onClick={() => push(`${route}/${map.parent!.id}`)}
                className={s.back}
              >
                <Arrow className={s.arrow} /> Go back to {map.parent.name} Map
              </div>
            )}
            {map.currentMap.map}
          </>
        )}
      </DestinationLayout>
      {route.split('/')[2] === 'areas' && map?.currentMap?.name ? (
        <DestinationAreas name={map.currentMap.name} />
      ) : (
        map && <DestinationHotels map={map} />
      )}
    </>
  )
}
