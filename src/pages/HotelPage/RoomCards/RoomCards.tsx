import React, { FC } from 'react'

import { RoomCard } from './RoomCard/RoomCard'
import { Room } from 'shared/types/hotel'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './RoomCards.module.scss'

interface RoomCardsProps {
  rooms: Room[]
}

export const RoomCards: FC<RoomCardsProps> = ({ rooms }) => {
  const t = useTranslate()

  return (
    <div className={s.roomCards}>
      <div className={s.roomCardsTitle}>{t('hotel.roomTitle')}</div>
      <div className={s.roomCardsSubTitle}>{t('hotel.roomSubTitle')}</div>

      <div className={s.roomCardsWrap}>
        {rooms.map(room => (
          <div key={room.id} className={s.roomCardWrap}>
            <RoomCard {...room} />
          </div>
        ))}
      </div>
    </div>
  )
}
