import React, { FC } from 'react'
import Image from 'next/image'

import s from './RoomCard.module.scss'

export interface RoomCardProps {
  image: string
  title?: string
  info?: string
  description?: string
}

export const RoomCard: FC<RoomCardProps> = ({
  image,
  description,
  title,
  info,
}) => {
  return (
    <div className={s.RoomCard}>
      <div className={s.RoomCardImage}>
        <Image src={image} alt='' width={'220'} height={'144px'} />
      </div>

      <div className={s.RoomCardBody}>
        <div className={s.RoomCardTitle}>{title}</div>
        <div className={s.RoomCardInfo}>{info}</div>
        <div className={s.RoomCardDescription}>{description}</div>
      </div>
    </div>
  )
}
