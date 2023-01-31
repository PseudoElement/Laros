import { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { Button } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'
import { withDomain } from 'shared/helpers/withDomain'

import { Currency } from 'shared/types'
import { Room } from 'shared/types/hotel'

import s from './RoomCard.module.scss'

interface RoomCardProps extends Room {
  onClick: (id: number) => void
  isSelected?: boolean
  isCurrent?: boolean
  className?: string
}
export const RoomCard: FC<RoomCardProps> = ({
  isSelected,
  id,
  isCurrent,
  onClick,
  image,
  room_name,
  price,
  change_price,
  description,
  className,
}) => {
  const t = useTranslate()
  const getBtnTitle = () => {
    if (isCurrent) {
      return 'Current'
    }
    if (isSelected) {
      return 'Selected'
    }
    return 'Select'
  }
  const selectRoom = () => {
    if (!isCurrent) {
      onClick(id)
    }
  }

  return (
    <div
      className={cn(s.card, className, {
        [s.selected]: isSelected,
        [s.current]: isCurrent,
      })}
    >
      {image ? (
        <Image src={withDomain(image)} width={20} height={20} />
      ) : (
        <div className={s.placeholder}></div>
      )}
      <div className={cn(s.content, ['scrollStyle'])}>
        <div className={s.name}>{room_name}</div>

        <div className={s.price}>{`${price} ${Currency.CHF} / ${t(
          'common.nightPro'
        )}`}</div>
        {change_price && (
          <div className={s.changePrice}>{`+ ${change_price} ${
            Currency.CHF
          } ${t('common.forChanging')}`}</div>
        )}

        {description && <div className={s.description}>{description}</div>}

        <Button
          onClick={() => selectRoom()}
          variant='outline'
          classname={cn(s.button, {
            [s.selectedBtn]: isSelected,
            [s.currentBtn]: isCurrent,
          })}
        >
          {getBtnTitle()}
        </Button>
      </div>
    </div>
  )
}
