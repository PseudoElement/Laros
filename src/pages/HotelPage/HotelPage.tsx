import React, { FC } from 'react'
import { HotelPageProps } from '../../shared/types/hotelPage'
import s from './HotelPage.module.scss'
import { RoomCard } from '../../features/RoomCard/RoomCard'

export const HotelPage: FC<HotelPageProps> = ({
  hotelImg,
  hotelMap,
  hotelName,
  description,
  rating,
  address,
  tags,
}) => {
  return (
    <div
      className={s.HotelPage}
      style={{ backgroundImage: `url(${hotelImg})` }}
    >
      <RoomCard
        rating={rating}
        address={address}
        hotelName={hotelName}
        description={description}
        hotelMap={hotelMap}
        tags={tags}
      />
    </div>
  )
}
