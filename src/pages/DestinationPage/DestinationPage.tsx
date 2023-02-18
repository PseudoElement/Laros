import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

import { DestinationLayout } from 'features/DestinationLayout'
import { DestinationHotels } from 'features/DestinationHotels/DestinationHotels'
import { AreasOf } from '../../features/AreasOf'

import { useTranslate } from 'shared/hooks/useTranslate'
import { Map, getCurrentMap } from 'shared/helpers/getMap'
import { getPath } from 'shared/helpers/getPath'

import Arrow from '/public/assets/images/blackArrow.svg'

import s from './DestinationPage.module.scss'

export const DestinationPage: FC = () => {
  const dispatch = useAppDispatch()
  const { query, pathname, push } = useRouter()
  const { destinations } = useAppSelector(state => state.destinations)
  const [map, setMap] = useState<Map | null>(null)
  const t = useTranslate()
  
  const currentDestinationId = Number(query.id)

  const currentDestinationDescription =
    destinations.filter(item => item.id === currentDestinationId)[0]
      ?.description || ''

  const route = getPath(pathname)
  const title = (map && map.currentMap?.name) || ''

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [])

  useEffect(() => {
    let map = getCurrentMap({
      destinations,
      destination: destinations.find(
        destination => destination.id === currentDestinationId
      ),
      route,
    })

    map.currentMap && setMap(map)
  }, [currentDestinationId, destinations, route])

  return (
    <>
      <div className={s.layoutWrapper}>
        <DestinationLayout
          currentDestination={currentDestinationId}
          destinations={destinations}
          description={currentDestinationDescription}
          title={title}
        >
          {map && map.currentMap && (
            <>
              {map.parent && (
                <div
                  onClick={() =>
                    push(`/destinations/${route}/${map.parent?.id}`)
                  }
                  className={s.back}
                >
                  <Arrow className={s.arrow} />{' '}
                  {t('destinationsSubRegion.buttonGoBack')} {map.parent.name}{' '}
                  {t('destinationsSubRegion.buttonGoBackMap')}
                </div>
              )}
              {map.currentMap.map && map.currentMap.map(map.location)}
            </>
          )}
        </DestinationLayout>
      </div>
      {map &&
        map.currentMap &&
        (route === 'areas' ? (
          <AreasOf
            isAreas
            className={s.areas}
            destination={map.currentMap}
            destinations={map.currentMap.destinations}
          />
        ) : (
          <DestinationHotels map={map.currentMap} />
        ))}
    </>
  )
}
