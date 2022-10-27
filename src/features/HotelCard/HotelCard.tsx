import React, { FC } from 'react'
import Image from 'next/image'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'

import { HotelsCard } from 'shared/types/hotelsCard'

import s from './HotelCard.module.scss'

export interface HotelCardProps extends HotelsCard {
  onClick?: (id: number) => void
}

export const HotelCard: FC<HotelCardProps> = ({
  rating,
  address,
  name,
  fromPrice,
  period,
  tags,
  image,
  onClick,
}) => {
  return (
    <div className={s.container}>
      <div className={s.slider}>
        <Image
          src={image}
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

      <button className={s.button}>Learn more</button>
    </div>
  )
}
