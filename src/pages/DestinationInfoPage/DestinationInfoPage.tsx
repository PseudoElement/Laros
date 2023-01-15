import { FC, useEffect, useState } from 'react'

import { HotelSection, DestinationIntro } from 'features'
import { Trips } from './Trips/Trips'
import { Overview } from './Overview/Overview'

import { getHotels } from 'shared/api/routes/hotels'
import { getTripsNearby } from 'shared/api/routes/trips'
import { useTranslate } from 'shared/hooks/useTranslate'
import { withDomain } from 'shared/helpers/withDomain'

import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'
import { Hotel } from 'shared/types/hotel'

import s from './DestinationInfoPage.module.scss'

export interface DestinationInfoPageProps {
  destination: Destination
}
export const DestinationInfoPage: FC<DestinationInfoPageProps> = ({
  destination,
}) => {
  const t = useTranslate()

  const [hotels, setHotels] = useState<Hotel[]>([])
  const [trips, setTrips] = useState<Trip[]>([])

  const tripsFilter = (trips: Trip[]) => {
    return trips.filter(
      item => !!(item.name && item.price && item.duration && item.period)
    )
  }

  const loadTripNearby = async (id: number) => {
    try {
      const { data } = await getTripsNearby(id)
      setTrips(tripsFilter(data.data))
    } catch (error) {
      console.error('error', error)
    }
  }

  const loadHotels = async (id: number) => {
    try {
      const { data } = await getHotels({ destination: id.toString() })
      setHotels(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (destination) {
      loadHotels(destination.id)
      loadTripNearby(destination.id)
    }
  }, [destination])

  return (
    <div className={s.destinationPage}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${
            destination?.images ? withDomain(destination.images[1]) : ''
          })`,
        }}
      />
      {destination ? <DestinationIntro {...destination} /> : null}

      {destination?.images ? (
        // @ts-ignore TODO
        <Overview images={destination.images} overview={destination.overview} />
      ) : null}

      {trips.length ? (
        <Trips
          trips={trips}
          title={destination?.name}
          subTitle={t('areaPage.HotelsInSubTitle')}
        />
      ) : null}

      {destination?.tips ? (
        <div
          className={s.insiderTips}
          dangerouslySetInnerHTML={{ __html: destination.tips }}
        />
      ) : null}

      {hotels.length ? (
        <HotelSection
          title={`${t('areaPage.HotelsInTitle')} ${destination?.name}`}
          subTitle={t('areaPage.HotelsInSubTitle')}
          hotels={hotels}
        />
      ) : null}
    </div>
  )
}
