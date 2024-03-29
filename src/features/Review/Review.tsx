import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import cn from 'classnames'

import { useTranslate } from 'shared/hooks/useTranslate'

import quotes from '/public/assets/images/blogs/“.svg?url'
import userPic from '/public/assets/images/blogs/abstract-user-flat-4-_1_.svg'

import s from './Review.module.scss'
import { TruncatedText } from '../../components'
import { TRIP_PLAN_DESCRIPTION_SIZE } from '../../shared/constants'
import { withDomain } from '../../shared/helpers/withDomain'

interface ReviewProps {
  id: number
  name: string
  tripname: string
  className?: string
  images?: StaticImageData[] | string[]
  avatar: StaticImageData | string
  text: string
  withAvatar?: boolean
  withImages?: boolean
}

export const Review: FC<ReviewProps> = ({
  avatar,
  id,
  name,
  tripname,
  className,
  text,
  images,
  withImages,
  withAvatar,
}) => {
  const t = useTranslate()

  return (
    <div className={s.wrapper}>
      <div className={cn(s.review, className)}>
        <div className={cn(s.profile, !withAvatar && s.profileWithoutAvatar)}>
          {withAvatar && <Image src={avatar ? avatar : userPic} alt='avatar' />}
          <div className={s.name}>{t(name)}</div>
          <div className={s.tripName}>
            {t('homepage.aboutUsCardSubName_1')}: <span>{t(tripname)}</span>
          </div>
        </div>

        <div className={s.comment}>{t(text)}</div>

        {images && (
          <div className={cn(s.images, ['scrollStyle'])}>
            {images.map((image, index) => (
              <div
                key={index}
                className={s.image}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            ))}
          </div>
        )}

        <span className={s.icon}>
          <Image src={quotes} alt='quotes' width={50} height={50} />
        </span>
      </div>
    </div>
  )
}
