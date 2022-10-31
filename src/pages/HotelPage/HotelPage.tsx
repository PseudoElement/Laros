import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { HotelIntro } from 'pages/HotelPage/HotelIntro/HotelIntro'
import { Facility } from 'pages/HotelPage/Facility/Facility'
import { RoomCards } from './RoomCards'
import { HotelImages } from './HotelImages/HotelImages'
import { OtherHotels } from './OtherHotels'
import { Gallery } from './Gallery/Gallery'

import { getHotel } from 'shared/api/routes/hotels'
import { getRooms } from 'shared/api/routes/rooms'

import { Hotel, Room } from 'shared/types/hotel'

import { hotelRoomsMock } from 'shared/mocks/hotel'
import { gallery } from 'shared/mocks/hotel'
import { HotelMock } from 'shared/mocks/hotel'
import { otherHotels } from 'shared/mocks/hotel'
import { facilitiesAndAmenities } from 'shared/mocks/hotel'

import s from './HotelPage.module.scss'

export const HotelPage: FC = () => {
  const [hotel, setHotel] = useState<Hotel | null>(null)
  const [rooms, setRooms] = useState<Room[] | null>(null)
  const { query } = useRouter()

  useEffect(() => {
    const hotelID = Number(query.id)

    const loadHotel = async (hotel: number) => {
      try {
        const hotelDetails = await getHotel(hotel)
        // setHotel(hotelDetails.data.data)
        setHotel(HotelMock)
      } catch (error) {
        console.error(error)
      }
    }
    const loadRooms = async () => {
      try {
        const hotelRooms = await getRooms()
        // setRooms(hotelRooms.data.data)
        setRooms(hotelRoomsMock)
      } catch (error) {
        console.error(error)
      }
    }
    loadRooms()
    loadHotel(hotelID)
  }, [query.id])

  return (
    <div
      className={s.HotelPage}
      style={{ backgroundImage: `url(${hotel ? hotel.images[0] : ''})` }}
    >
      {hotel ? <HotelIntro {...hotel} /> : null}
      {hotel ? <HotelImages images={hotel.images} /> : null}
      <Facility facilitiesAndAmenities={facilitiesAndAmenities} />
      {rooms ? <RoomCards rooms={rooms} /> : null}

      <OtherHotels hotels={otherHotels} />
      <Gallery gallery={gallery} />
    </div>
  )
}
