import React, { FC, useEffect, useState } from 'react'
import s from './BlogPage.module.scss'
import { BlogPayload } from 'shared/types/blogs'
import { ArrowIcon, Button } from 'components'
import { Slider } from 'components'
import { useRouter } from 'next/router'
import { BlogSection } from 'features/BlogSection'
import { ContactFooterHero } from 'features/ContactFooterHero'
import { useTranslate } from 'shared/hooks/useTranslate'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { TABLET_SCREEN } from 'shared/constants/screenResolutions'
import { getPostById } from 'shared/api/routes/blogs'

export const Blog: FC = () => {
  const router = useRouter()
  const blogId = Number(router.query.id)
  const [post, setPost] = useState<BlogPayload>()
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
            </div>
          </div>
        </div>
      ) : (
        <div className={s.noPost}>{t('blogs.noPost')}</div>
      )}
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
          <div className={s.article}>
            <h1 className={s.articleTitle}>{t('homepage.ourBlog_1_title')}</h1>
            <p className={s.articleText}>{t('blogs.blogArticleText')}</p>
            <div className={s.articleData}>01 {t('blogs.date')}, 2022</div>
          </div>
          <div className={s.article}>
            <h1 className={s.articleTitle}>{t('homepage.ourBlog_1_title')}</h1>
            <p className={s.articleText}>{t('blogs.blogArticleText')}</p>
            <div className={s.articleData}>01 {t('blogs.date')}, 2022</div>
          </div>
          <div className={s.article}>
            <h1 className={s.articleTitle}>{t('homepage.ourBlog_1_title')}</h1>
            <p className={s.articleText}>{t('blogs.blogArticleText')}</p>
            <div className={s.articleData}>01 {t('blogs.date')}, 2022</div>
          </div>
          <div className={s.article}>
            <h1 className={s.articleTitle}>{t('homepage.ourBlog_1_title')}</h1>
            <p className={s.articleText}>{t('blogs.blogArticleText')}</p>
            <div className={s.articleData}>01 {t('blogs.date')}, 2022</div>
          </div>
        </Slider>
      </div>
      <ContactFooterHero />
    </>
  )
}
