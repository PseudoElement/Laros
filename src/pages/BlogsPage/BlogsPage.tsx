import React, { FC, useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'

import { Review, BlogSection, ContactFooterHero } from 'features'
import { Slider, BlogHeaderImage, Button } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'

import { reviewsMock } from 'shared/mocks/reviews'

import s from './BlogsPage.module.scss'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { TABLET_SCREEN } from 'shared/constants/screenResolutions'
import { BlogPayload } from 'shared/types/blogs'
import { useGetBlogs } from 'shared/hooks/useGetBlogs'

import { Loader } from 'components/Loader'

interface BlogItemProps {
  id: number
  title: string
  description: string
  image: string | StaticImageData
  reversed: boolean
}

export const BlogItem: FC<BlogItemProps> = ({
  id,
  title,
  description,
  image,
  reversed,
}) => {
  return (
    <li className={s.blogItemWrapper}>
      <BlogSection
        title={title}
        description={description}
        image={image}
        id={id}
        haveButton
        reversed={reversed}
      />
    </li>
  )
}

export const BlogsPage: FC = () => {
  const BLOGS_PAGINATION_PER_PAGE = 10
  const [params, setParams] = useState({
    page: 1,
    size: BLOGS_PAGINATION_PER_PAGE,
  })
  const [newBlogs, isLoading, handleReady] = useGetBlogs(params)
  const [blogs, setBlogs] = useState<BlogPayload[]>([...newBlogs])
  const [isButtonShowed, setIsButtonShowed] = useState<boolean>(
    newBlogs.length === BLOGS_PAGINATION_PER_PAGE
  )
  const t = useTranslate()
  const { width } = useWindowDimensions()

  useEffect(() => {
    setIsButtonShowed(newBlogs.length === BLOGS_PAGINATION_PER_PAGE)
    setBlogs(prevState => prevState.concat(...newBlogs))
  }, [newBlogs])

  useEffect(() => handleReady(true), [params])

  return !isLoading ? (
    <>
      <div className={s.page}>
        <div className={s.pictures}>
          <BlogHeaderImage />
        </div>
        <ul className={s.blogs}>
          {Boolean(blogs.length)
            ? blogs.map(blogData => (
                <BlogItem
                  title={blogData.title}
                  description={blogData.description}
                  key={blogData.id}
                  image={blogData.image}
                  id={blogData.id}
                  reversed={blogs.indexOf(blogData) % 2 === 0}
                />
              ))
            : null}
        </ul>
        {isButtonShowed && (
          <div className={s.buttonWrapper}>
            <Button
              onClick={() =>
                setParams(prevState => ({
                  ...prevState,
                  page: ++prevState.page,
                }))
              }
              variant='secondary'
            >
              {t('common.loadMore')}
            </Button>
          </div>
        )}
        <div className={s.reviews}>
          <div className={s.title}>
            <h3>{t('homepage.aboutUsTitle')}</h3>
            <p className={s.descr}>{t('homepage.aboutUsSubTitle')}</p>
          </div>
          <div className={s.sliderContainer}>
            <Slider
              slidesPerView={width > TABLET_SCREEN ? 2 : 1}
              withPagination
              withNavigation={width > TABLET_SCREEN}
              classname={s.sliderCustom}
            >
              {reviewsMock.map(review => (
                <Review {...review} key={review.id} />
              ))}
            </Slider>
          </div>
        </div>
        <ContactFooterHero />
      </div>
    </>
  ) : (
    <>
      <div className={s.page}>
        <div className={s.pictures}>
          <Loader />
        </div>
      </div>
    </>
  )
}
