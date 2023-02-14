import { FC, useState } from 'react'
import cn from 'classnames'

import { Button } from 'components'
import { RoomCard } from './RoomCard'

import { useTranslate } from '../../shared/hooks/useTranslate'

import { Room } from 'shared/types/hotel'

import s from './ChangeAccomodationModal.module.scss'

interface ChangeAccomodationModalProps {
  rooms: Room[]
  hotel: string
  onClose: () => void
  onSubmit: (room: Room) => void
  current?: number
}
export const ChangeAccomodationModal: FC<ChangeAccomodationModalProps> = ({
  hotel,
  rooms,
  current,
  onClose,
  onSubmit,
}) => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const t = useTranslate()
  const changeAccomodation = () => {
    const newRoom = rooms.find(room => room.id === selectedRoom)
    if (newRoom) {
      onSubmit(newRoom)
    } else {
      alert('Dieser Raum kann nicht ausgewählt werden, tut mir leid')
    }
    onClose()
  }

  return (
    <div className={s.modal}>
      <div className={s.head}>
        <div className={s.title}>
          {t('changingRoomType.roomsOf')} {hotel}
        </div>
        <div className={s.description}>{t('changingRoomType.subTitle')}:</div>
      </div>

      <div className={cn(s.rooms, ['scrollStyle'])}>
        {rooms.map(room => (
          <RoomCard
            key={room.id}
            isCurrent={current === room.id}
            isSelected={selectedRoom === room.id}
            onClick={() => setSelectedRoom(room.id)}
            className={s.roomCard}
            {...room}
          />
        ))}
      </div>

      <div className={s.actions}>
        <Button onClick={changeAccomodation}>
          {t('changingRoomType.save')}
        </Button>

        <Button onClick={onClose} variant='outline'>
          {t('changingRoomType.cancel')}
        </Button>
      </div>
    </div>
  )
}
