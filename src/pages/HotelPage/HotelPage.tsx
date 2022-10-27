import React, { FC } from 'react'

import { HotelIntro } from 'pages/HotelPage/HotelIntro/HotelIntro'
import { Facility } from 'pages/HotelPage/Facility/Facility'
import { RoomCards } from './RoomCards'
import { OtherHotels } from './OtherHotels'
import { Gallery } from './Gallery/Gallery'

import { HotelMock } from 'shared/mocks/hotel'
import { hotelRooms } from 'shared/mocks/hotel'
import { otherHotels } from 'shared/mocks/hotel'
import { gallery } from 'shared/mocks/hotel'

import s from './HotelPage.module.scss'

export const HotelPage: FC = () => {
  return (
    <div
      className={s.HotelPage}
      style={{ backgroundImage: `url(${HotelMock.images})` }}
    >
      <HotelIntro {...HotelMock} />
      <Facility facilitiesAndAmenities={HotelMock.facilitiesAndAmenities} />
      <RoomCards rooms={hotelRooms} />
      <OtherHotels hotels={otherHotels} />
      <Gallery gallery={gallery} />
    </div>
  )
}
