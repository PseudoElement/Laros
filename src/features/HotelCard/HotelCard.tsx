import React, { FC, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Tag } from 'shared/types/tag'
import Image from 'next/image'
import cn from 'classnames'

import s from './HotelCard.module.scss'

import hotel_pic from '../../../public/assets/images/area-images/cart__hotel-four.jpg'
import { mockTags } from 'shared/mocks/tags'

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
  type,
  name,
  fromPrice,
  period,
  tags,
  onClick,
}) => {
  return (
    <div className={s.container}>
      <div className={s.slider}>
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
        <div className={s.type}>{type}</div>
        <div className={s.name}>{name}</div>
      </div>
      <div className={s.info}>
        <div className={s.block}>
          <p className={s.text}>From</p>
          <p className={s.price}>{fromPrice} CHF/Night</p>
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
      <button className={s.button}>Learn more</button>
    </div>
  )
}
