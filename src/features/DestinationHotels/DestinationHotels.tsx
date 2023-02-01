import React, { FC, useEffect, useState } from 'react'

import Sorting from './Sorting/Sorting'
import { HotelCard } from 'features'
import { Button } from 'components'

import { Hotel, HotelFilterParams } from 'shared/types/hotel'
import { Destination } from 'shared/types/destinations'
import { useGetHotels } from 'shared/hooks/useGetHotels'
import { useTranslate } from 'shared/hooks/useTranslate'

import s from './DestinationHotels.module.scss'
import { useRouter } from 'next/router'

interface DestinationHotelsProps {
  map: Destination & {
    destinations: Destination[]
  }
}

export const DestinationHotels: FC<DestinationHotelsProps> = ({ map }) => {
  const HOTEL_PAGINATION_PER_PAGE = 10

  const { query } = useRouter()

  const currentDestination = query.id

  const [params, setParams] = useState<Partial<HotelFilterParams>>({
    destination: currentDestination?.toString() ?? undefined,
    size: HOTEL_PAGINATION_PER_PAGE,
  })
  const [newHotels, isLoading, handleReady] = useGetHotels(params)
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [page, setPage] = useState(1)
  const [showMoreButton, setShowMoreButton] = useState<boolean>(
    newHotels.length === HOTEL_PAGINATION_PER_PAGE - 1
  )
  const t = useTranslate()

  useEffect(() => {
    setParams(prevState => ({
      ...prevState,
      page,
    }))
  }, [page])

  useEffect(() => {
    const timeout = setTimeout(() => handleReady(), 200)
    return () => {
      clearTimeout(timeout)
    }
  }, [params])

  useEffect(() => {
    setShowMoreButton(newHotels.length === HOTEL_PAGINATION_PER_PAGE - 1)

    setHotels(prevState => {
      if (params.page === 1) return newHotels
      return prevState.concat(...newHotels)
    })
  }, [newHotels])

  useEffect(() => {
    setParams(prevState => ({
      ...prevState,
      destination: currentDestination?.toString(),
    }))
  }, [currentDestination])

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
      <h3 className={s.title}>{t('hotels.sortTitle')}</h3>
      <Sorting
        map={map}
        setParams={setParams}
        params={params}
        setPage={setPage}
      />

      {!isLoading && !hotels.length && (
        <div className={s.loading}>{t('common.emptyText')}</div>
      )}

      {isLoading && page === 1 ? (
        <div className={s.loading}>{t('common.loadingText')}</div>
      ) : (
        <div className={s.hotels}>
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}

      {!isLoading && Boolean(hotels.length) && showMoreButton && (
        <Button
          variant='secondary'
          classname={s.button}
          onClick={() => setPage(prevState => ++prevState)}
        >
          {t('common.loadMore')}
        </Button>
      )}
      </div>
    </div>
  )
}
