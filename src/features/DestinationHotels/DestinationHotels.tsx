import { FC, useEffect, useState } from 'react'

import Sorting from './Sorting/Sorting'
import { HotelCard } from '../HotelCard'

import { Hotel, HotelFilterParams } from 'shared/types/hotel'
import { useGetHotels } from 'shared/hooks/useGetHotels'
import { Region } from 'shared/types/region'
import { useTranslate } from 'shared/hooks/useTranslate'

import s from './DestinationHotels.module.scss'
import { Button } from '../../components'

interface DestinationHotelsProps {
  map: Region
}

const DestinationHotels: FC<DestinationHotelsProps> = ({ map }) => {
  const HOTEL_PAGINATION_PER_PAGE = 50

  const [params, setParams] = useState<Partial<HotelFilterParams>>({})
  const [newHotels, isLoading, handleReady] = useGetHotels(params)
  const [hotels, setHotels] = useState<Hotel[]>([...newHotels])
  const [page, setPage] = useState(1)
  const [showMoreButton, setShowMoreButton] = useState<boolean>(
    newHotels.length === HOTEL_PAGINATION_PER_PAGE
  )
  const t = useTranslate()

  useEffect(() => {
    setParams({ destination: String(map.id) })
  }, [map])

  useEffect(() => {
    const timeout = setTimeout(() => handleReady(), 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [params])

  return (
    <div className={s.container}>
      <h3 className={s.title}>{t('hotels.sortTitle')}</h3>
      <Sorting map={map} setParams={setParams} params={params} />
      {!isLoading ? (
        <>
          {hotels.length ? (
            <div className={s.hotels}>
              {hotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className={s.loading}>{t('common.emptyText')}</div>
          )}
        </>
      ) : (
        <div className={s.loading}>{t('common.loadingText')}</div>
      )}
        {Boolean(hotels.length) && showMoreButton && (
            <Button
                variant='secondary'
                classname={s.button}
                onClick={() => setPage(prevState => ++prevState)}
            >
                Show More
            </Button>
        )}
    </div>
  )
}

export default DestinationHotels
