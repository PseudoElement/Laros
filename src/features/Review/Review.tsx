import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import s from './Review.module.scss'
import quotes from '/public/assets/images/blogs/“.svg'
import userPic from '/public/assets/images/blogs/abstract-user-flat-4-_1_.svg'

import cn from 'classnames'

interface ReviewProps {
  id: number
  name: string
  tripname: string
  className?: string
  images?: StaticImageData[] | string[]
  avatar: StaticImageData | string
  text: string
}

export const Review: FC<ReviewProps> = ({
  avatar,
  id,
  name,
  tripname,
  className,
  text,
  images,
}) => {
  return (
    <div className={cn(s.review, className)}>
      <div className={s.profile}>
        <Image src={avatar ? avatar : userPic} alt='avatar' />
        <ul className={s.info}>
          <li className={s.name}>{name}</li>
          <li className={s.tripname}>{tripname}</li>
        </ul>
      </div>
      <div className={s.comments}>
        <p className={s.comment}>{text}</p>
        {images &&
          images.map((image, index) => (
            <Image key={index} width={120} height={120} src={image} />
          ))}
      </div>
      <span className={s.icon}>
        <Image src={quotes} alt='quotes' />
      </span>
    </div>
  )
}