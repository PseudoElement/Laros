import React, { FC, useState } from 'react'
import Image from 'next/image'
import { truncate } from 'lodash'
import ReactStars from 'react-rating-stars-component'

import { Select } from 'components/Select'
import { Button } from 'components'
import { HotelTags } from 'features/HotelTags/HotelTags'

import trash from '../../../../public/assets/images/Trash.svg'
import add from '../../../../public/assets/images/plus.svg'

import { TRUNCATED_ROOM_CARD_TEXT_SIZE } from 'shared/constants'
import { HotelPageProps } from 'shared/types/hotelPage'

import s from './HotelIntro.module.scss'

export const HotelIntro: FC<HotelPageProps> = ({
  description,
  name,
  address,
  rating,
  tags,
  location,
}) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true)
  const options = ['1', '3', '4']

  return (
    <div className={s.HotelIntro}>
      <div className={s.HotelIntroLeft}>
        {/*============================================================================================== Rating*/}
        <ReactStars
          count={5}
          value={rating}
          size={24}
          activeColor='#ffd700'
          edit={false}
        />
        {/*============================================================================================ Address*/}
        <div className={s.HotelIntroAddress}>{address}</div>

        {/*========================================================================================= Hotel Name*/}
        <div className={s.HotelIntroName}>{name}</div>

        {/*================================================================================== hotel Description*/}
        <div className={s.HotelIntroDescription}>
          {isTruncated
            ? truncate(description, { length: TRUNCATED_ROOM_CARD_TEXT_SIZE })
            : description}
        </div>
        {/*======================================================================= button open more Description*/}
        <div
          className={s.HotelIntroSeeMore}
          onClick={() => setIsTruncated(prev => !prev)}
        >
          See more
        </div>

        <div>
          <input className={s.InputCalendar} type={'text'} />
          <input className={s.InputCalendar} type={'text'} />
        </div>

        <div className={s.HotelIntroOptionWrap}>
          <div className={s.HotelIntroOptionTitle}>Room 1</div>
          <Select options={options} classname={s.HotelIntroOptionSelect} />
          <Image src={trash} alt='' />
        </div>

        <div>
          <input
            type={'text'}
            placeholder={'Adults'}
            className={s.HotelIntroNumberInput}
          />
          <input
            type={'number'}
            placeholder={'Children (2-12 years old):'}
            className={s.HotelIntroNumberInput}
          />
        </div>

        <div className={s.HotelIntroAddRoom}>
          <span>
            <Image src={add} alt='' />
          </span>
          <div className={s.HotelIntroOptionTitle}>Add room</div>
        </div>

        <Button>Start trip planning</Button>
      </div>

      <div className={s.HotelIntroRight}>
        <div>
          <Image src={location} width={542} height={425} alt='' />
        </div>

        <div className={s.TagsPanel}>
          <div className={s.TagsTitle}>Highlights:</div>
          <HotelTags tags={tags} limit={4} />
        </div>
      </div>
    </div>
  )
}
