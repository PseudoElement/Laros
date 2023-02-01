import { FC } from 'react'
import cls from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './Post.module.scss'
import { BlogPayload } from '../../../shared/types/blogs'

interface PostBlockProps {
  posts: BlogPayload[]
}

export const PostBlock: FC<PostBlockProps> = ({ posts }) => {
  const fullPost = posts.filter((item, index) => index === 0)
  const post = posts.filter((item, index) => index !== 0 && index <= 2)
  const t = useTranslate()

  return (
    <div className={s.wrapper}>
      <div className={s.contentWrapper}>
        {fullPost.map((post, idx) => (
          <div className={s.left} key={idx}>
            <h3 className={s.mainTitle}>{t('homepage.ourBlogTitle')}</h3>

            <div className={s.imageWrapper}>
              <Image
                alt='Picture'
                className={cls(s.image, s.fullPostImage)}
                width={652}
                height={384}
                src={post.image}
              />
            </div>

            <h3 className={s.title}>{t(post.title)}</h3>
            <p
              className={s.subtitle}
              dangerouslySetInnerHTML={{
                __html: t(post.description.split('. ')[0]),
              }}
            />
          </div>
        ))}

        <div className={s.rightWrapper}>
          <div className={s.right}>
            {post.map((post, idx) => {
              return (
                <div className={s.post} key={idx}>
                  <div className={s.textBlock}>
                    <h3 className={cls(s.title, s.postTitle)}>
                      {t(post.title)}
                    </h3>
                    <p
                      className={s.text}
                      dangerouslySetInnerHTML={{
                        __html: t(post.description.split('. ')[0]),
                      }}
                    />
                  </div>

                  <Image
                    alt='Picture'
                    className={cls(s.image, s.smallImage)}
                    width={260}
                    height={184}
                    src={post.image}
                  />
                </div>
              )
            })}

            <button className={s.button}>
              <Link className={s.link} href={'/blogs'}>
                {t('homepage.ourBlogButtonMore')}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
