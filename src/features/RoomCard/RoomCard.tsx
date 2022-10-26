import React, { FC, useState } from 'react'
import s from './RoomCard.module.scss'
import Image from 'next/image'
import { HotelTags } from '../HotelTags/HotelTags'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'
import { TagProps } from '../../components/Tag/Tag'
import { truncate } from 'lodash'
import { TRUNCATED_ROOM_CARD_TEXT_SIZE } from '../../shared/constants'
import { Input } from '../../components/Input'
import { InputCalendar } from '../../components/InputCalendar'
import { Select } from '../../components/Select'

interface RoomCardProps {
  rating: number
  address: string
  hotelName: string
  description: string
  hotelMap: string
  tags: TagProps[]
}
export const RoomCard: FC<RoomCardProps> = ({
  description,
  hotelName,
  hotelMap,
  address,
  rating,
  tags,
}) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true)
  const options = ['1', '3', '4']
  return (
    <div className={s.RoomCard}>
      <div className={s.RoomCardLeft}>
        {/*============================================================================================== Rating*/}
        <ReactStars
          count={5}
          value={rating}
          size={24}
          activeColor='#ffd700'
          edit={false}
        />
        {/*============================================================================================ Address*/}
        <div className={s.RoomCardAddress}>{address}</div>

        {/*========================================================================================= Hotel Name*/}
        <div className={s.RoomCardHotelName}>{hotelName}</div>

        {/*================================================================================== hotel Description*/}
        <div className={s.RoomCardDescription}>
          {isTruncated
            ? truncate(description, { length: TRUNCATED_ROOM_CARD_TEXT_SIZE })
            : description}
        </div>
        {/*======================================================================= button open more Description*/}
        <div
          className={s.RoomCardSeeMore}
          onClick={() => setIsTruncated(prev => !prev)}
        >
          See more
        </div>

        <div>
          <input className={s.InputCalendar} type={'text'} />
          <input className={s.InputCalendar} type={'text'} />
        </div>

        <div>
          <span>Room 1</span>
          <Select options={options} />
        </div>
      </div>

      <div className={s.RoomCardRight}>
        <div>
          <Image src={hotelMap} width={542} height={425} alt='' />
        </div>

        <div className={s.TagsPanel}>
          <div className={s.TagsTitle}>Highlights:</div>
          <HotelTags tags={tags} limit={4} />
        </div>
      </div>
    </div>
  )
}
