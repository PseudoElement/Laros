import { FC, useEffect, useState } from 'react'
import { HotelIntro } from './HotelIntro'
import { Facility } from './Facility'
import { RoomCards } from './RoomCards'
import { HotelImages } from './HotelImages/HotelImages'
import { NearbyDestinations } from './NearbyDestinations/NearbyDestinations'
import { HotelSection } from 'features'

import { withDomain } from 'shared/helpers/withDomain'
import { getNearHotels } from 'shared/api/routes/hotels'
import { getRooms } from 'shared/api/routes/rooms'
import { getNearDestinations } from 'shared/api/routes/destinations'

import { useTranslate } from 'shared/hooks/useTranslate'

import { Hotel, Room } from 'shared/types/hotel'
import { Destination } from 'shared/types/destinations'

import s from './HotelPage.module.scss'

interface HotelProps {
  hotelProp: Hotel
}

export const HotelPage: FC<HotelProps> = ({ hotelProp }) => {
  const t = useTranslate()

  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [rooms, setRooms] = useState<Room[]>([])
  const [nearHotels, setNearHotels] = useState<Hotel[]>([])
  const [nearDestinations, setNearDestinations] = useState<Destination[]>([])

  const loadNearHotels = async (hotelId: number) => {
    try {
      const { data } = await getNearHotels(hotelId)
      setNearHotels(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadRooms = async (hotelId: number) => {
    try {
      const { data } = await getRooms({ hotel: hotelId })
      setRooms(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const loadNearDestinations = async (hotelId: number) => {
    try {
      const { data } = await getNearDestinations(hotelId)
      setNearDestinations(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (hotelProp) {
      setHotel(hotelProp)
    }
  }, [hotelProp])

  useEffect(() => {
    if (hotel) {
      loadNearDestinations(hotel.id)
      loadNearHotels(hotel.id)
      loadRooms(hotel.id)
    }
  }, [hotel])

  return (
    <div className={s.hotelPage}>
      <div
        className={s.bg}
        style={{
          backgroundImage: `url(${
            hotel?.images ? withDomain(hotel.images[1]) : ''
          })`,
        }}
      />
      {hotel ? <HotelIntro {...hotel} /> : null}

      {hotel?.images && hotel?.images.length - 2 ? (
        <HotelImages images={hotel.images} />
      ) : null}

      {hotel?.facilities?.length ? (
        <Facility facilitiesAndAmenities={hotel.facilities} />
      ) : null}

      {rooms.length ? <RoomCards rooms={rooms} /> : null}

      {nearHotels.length ? (
        <HotelSection
          hotels={nearHotels}
          title={t('hotel.otherTitle')}
          subTitle={t('hotel.otherSubTitle')}
        />
      ) : null}

      {nearDestinations.length > 0 ? (
        <NearbyDestinations destination={nearDestinations} />
      ) : null}
    </div>
  )
}
