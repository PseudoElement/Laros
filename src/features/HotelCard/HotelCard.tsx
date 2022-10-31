import React, { FC } from 'react'
import Image from 'next/image'

// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { Button } from 'components'

import { Hotel } from 'shared/types/hotel'

import s from './HotelCard.module.scss'

export interface HotelCardProps {
  rating: number
  type: string
  name: string
  fromPrice: number
  period: string
  tags: Tag[]
  onClick?: (id: number) => void
}

export const HotelCard: FC<HotelCardProps> = ({
  rating,
  address,
  name,
  tags,
  images,
  id,
  link,
  location,
  max_capacity,
  period,
  tripadvisor_id,
  is_active,
  opinion,
  destination,
  description,
  onClick,
    min_price
}) => {
  return (
    <div className={s.HotelCard}>
      <div className={s.HotelCardImage}>
        <Image
          layout='fill'
          objectFit='cover'
          src={hotel_pic}
          alt='Hotel Picture'
        />
      </div>

      <div className={s.header}>
        <div className={s.rating}>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor='#ffd700'
            edit={false}
          />
        </div>
        <div className={s.type}>{address}</div>
        <div className={s.name}>{name}</div>
      </div>

      <div className={s.info}>
        <div className={s.block}>
          <p className={s.text}>From</p>
          <p className={s.price}>{min_price} CHF / Night</p>
          <p className={s.text}>Pro person</p>
        </div>
        <div className={s.block}>
          <p className={s.text}>Travel Period</p>
          <p className={s.period}>{period}</p>
        </div>
      </div>

      <div className={s.tags}>
        {tags.map(tag => (
          <p key={tag.id} className={s.tag}>
            {tag.name}
          </p>
        ))}
      </div>

      <Button classname={s.button}>Learn more</Button>
    </div>
  )
}
