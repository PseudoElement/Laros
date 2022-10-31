import React, { FC } from 'react'
import Image from 'next/image'

import ReactStars from 'react-rating-stars-component'

import { Button } from 'components'

import { Hotel } from 'shared/types/hotel'

import s from './HotelCard.module.scss'

export interface HotelCardProps extends Hotel {
  onClick?: (id: number) => void
}

export const HotelCard: FC<HotelCardProps> = ({
  rating,
  address,
  name,
  fromPrice,
  period,
  tags,
  images,
  onClick,
}) => {
  return (
    <div className={s.HotelCard}>
      <div className={s.HotelCardImage}>
        <Image
          src={images}
          objectFit='cover'
          width='368'
          height='180'
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
          <p className={s.price}>{fromPrice} CHF / Night</p>
          <p className={s.text}>Pro person</p>
        </div>
        <div className={s.block}>
          <p className={s.text}>Travel Period</p>
          <p className={s.period}>{period}</p>
        </div>
      </div>

      <div className={s.tags}>
        {tags.map((tag, index) => (
          <p key={index} className={s.tag}>
            {tag.name}
          </p>
        ))}
      </div>

      <Button classname={s.button}>Learn more</Button>
    </div>
  )
}
