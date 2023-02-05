import React, { FC, useEffect, useState } from 'react'
import { BlogPayload } from 'shared/types/blogs'
import { ArrowIcon, Button } from 'components'
import { Slider } from 'components'
import { useRouter } from 'next/router'
import { BlogSection } from 'features/BlogSection'
import { ContactFooterHero } from 'features/ContactFooterHero'
import { useTranslate } from 'shared/hooks/useTranslate'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { TABLET_SCREEN } from 'shared/constants/screenResolutions'
import { getBlogs, getPostById } from 'shared/api/routes/blogs'

import s from './BlogPage.module.scss'

export const Blog: FC = () => {
  const router = useRouter()
  const blogId = Number(router.query.id)
  const [post, setPost] = useState<BlogPayload>()
  const [posts, setPosts] = useState<BlogPayload[]>([])
  const t = useTranslate()
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (blogId) {
      const fetchPost = async () => {
        return await getPostById(blogId)
      }
      //@ts-ignore
      fetchPost().then(post => setPost(post.data.data))
    }
  }, [blogId])

  useEffect(() => {
    const fetchPosts = async () => {
      return await getBlogs({})
    }
    //@ts-ignore
    fetchPosts().then(post => setPosts(post.data.data))
  }, [])

  return (
    <>
      {post ? (
        <div className={s.wrapper}>
          <div className={s.main}>
            <div className={s.header}>
              <Button
                variant={'outline'}
                classname={s.button}
                onClick={() => router.push('/blogs')}
              >
                <ArrowIcon />
                <div>{t('blogs.buttonBack')}</div>
              </Button>
            </div>
            <div className={s.contentWrapper}>
              <BlogSection
                title={post.title}
                description={post.description}
                image={post.image}
              />
              <div className={s.mainContent}>
                <p
                  className={s.textContent}
                  dangerouslySetInnerHTML={{ __html: t(post.content) }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.noPost}>{t('blogs.noPost')}</div>
      )}
      {posts ? (
        <div className={s.sliderContainer}>
          <h5 className={s.sliderTitle}>{t('blogs.sliderTitle')}</h5>
          <Slider
            slidesPerView={width > TABLET_SCREEN ? 2 : 1}
            withPagination
            withNavigation={width > TABLET_SCREEN}
            nextEl='moreNext'
            prevEl='morePrev'
            classname={s.sliderCustom}
          >
            {posts.map(post => (
              <div
                className={s.article}
                onClick={() => router.push(`/blogs/${post.id}`)}
              >
                <h1 className={s.articleTitle}>{t(post.title)}</h1>
                <p
                  className={s.articleText}
                  dangerouslySetInnerHTML={{
                    __html: t(post.description.split('</p>')[0]),
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : null}
      <ContactFooterHero />
    </>
  )
}
