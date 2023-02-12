import { FC } from 'react'
import Image from 'next/image'

import { withDomain } from 'shared/helpers/withDomain'
import { useTranslate } from 'shared/hooks/useTranslate'

import { Room } from 'shared/types/hotel'

import s from './RoomCard.module.scss'
import { whiteSpace } from '../../../../shared/helpers/whiteSpace'

export const RoomCard: FC<Room> = ({
  images,
  description,
  room_name,
  per_person_chf,
  title,
  id,
  destination_name,
  hotel_name,
  change_price,
  season_price,
  capacity,
}) => {
  const t = useTranslate()

  return (
    <div className={s.roomCard}>
      <div className={s.roomCardImage}>
        {images.length ? (
          <Image src={withDomain(images[0])} alt='' layout={'fill'} />
        ) : null}
      </div>

      <div className={s.roomCardBody}>
        <div className={s.roomCardTitle}>{room_name}</div>

        <div className={s.roomCardInfo}>
          {per_person_chf} CHF / {t('common.nightPro')}
        </div>

        <div className={s.roomCardDescription}>{whiteSpace(description)}</div>
      </div>
    </div>
  )
}
