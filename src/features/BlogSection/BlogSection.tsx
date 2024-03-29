import React, { FC } from 'react'
import s from './BlogSection.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../../components'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useTranslate } from '../../shared/hooks/useTranslate'

interface BlogSection {
  id?: number
  title: string
  read?: number
  description: string
  image: string | StaticImageData
  reversed?: boolean
  haveButton?: boolean
  subTitle?: string
}

export const BlogSection: FC<BlogSection> = ({
  title,
  read,
  description,
  image,
  haveButton,
  id,
  reversed,
}) => {
  const router = useRouter()
  const t = useTranslate()

  return (
    <div className={cn(s.blog, reversed ? s.blogReversed : '')}>
      <div className={s.content}>
        <h2 className={s.mainTitle}>{t(title)}</h2>
        {read && <div className={s.read}>{`${read} ${t('blogs.time')}`}</div>}
        <p
          dangerouslySetInnerHTML={{ __html: t(description) }}
          className={s.description}
        />
        {haveButton && (
          <Button
            variant='secondary'
            classname={s.button}
            onClick={() => router.push(`/blogs/${id}`)}
          >
            {t('blogs.learnMoreText')}
          </Button>
        )}
      </div>
      <div className={s.image}>
        <Image src={image} height={519} width={519} alt='blogImage' />
      </div>
    </div>
  )
}
