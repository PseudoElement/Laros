import { FC } from 'react'
import s from './SliderItem.module.scss'
import cls from 'classnames'
import Image, { StaticImageData } from 'next/image'

import playIcon from '/public/assets/images/PlayIcon.png'

interface SliderItemProps {
  className?: string
  image: string | StaticImageData | undefined
  isVideo?: boolean
  active?: boolean
  setActiveSlide: (id: number) => void
  id: number
}

export const SliderItem: FC<SliderItemProps> = ({
  className,
  isVideo = false,
  image,
  active,
  id,
  setActiveSlide,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})`, minWidth: 100 }}
      onClick={() => setActiveSlide(id)}
      className={cls(className, s.wrapper, {
        [s.active]: active,
      })}
    >
      <div className={s.playIconWrapper}>
        {isVideo && (
          <Image className={s.playIcon} src={playIcon} layout={'fixed'} />
        )}
      </div>
    </div>
  )
}
