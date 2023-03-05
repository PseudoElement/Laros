import { FC } from 'react'
import { StaticImageData } from 'next/image'
import cn from 'classnames'

import { withDomain } from 'shared/helpers/withDomain'

import s from './AreaCard.module.scss'

interface AreaCardProps {
  image: string | StaticImageData | HTMLImageElement
  name: string | null
  id: number
  onClick?: (id: number) => void
  className?: string
}

export const AreaCard: FC<AreaCardProps> = ({ image, onClick, id, name , className}) => {
  const handleClick = () => {
    onClick?.(id)
  }

  return (
    <div
      onClick={handleClick}
      className={cn(s.image, className)}
      style={{
        backgroundImage: `url(${image ? withDomain(image) : ''})`,
      }}
    >
      <div className={s.shadow}>{''}</div>
      <span className={s.name}>{name}</span>
    </div>
  )
}
