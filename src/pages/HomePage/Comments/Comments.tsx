import { FC } from 'react'

import { Slider } from 'components'
import { Review } from 'features'

import { useTranslate } from 'shared/hooks/useTranslate'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { Review as ReviewType } from 'shared/types/review'

import s from './Comments.module.scss'

interface CommentsBlockProps {
  comments: ReviewType[]
}

export const Comments: FC<CommentsBlockProps> = comments => {
  const t = useTranslate()
  const widthWindow = useWindowDimensions().width

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{t('homepage.aboutUsTitle')}</h3>

      <p className={s.subtitle}>{t('homepage.aboutUsSubTitle')}</p>

      <Slider
        withPagination={true}
        withNavigation={widthWindow > 850}
        slidesPerView={widthWindow <= 950 ? 1 : 2}
        nextEl={s.buttonNext}
        prevEl={s.buttonPrev}
      >
        {comments?.comments.map(review => (
          <Review key={review.id} withAvatar={false} withImages {...review} />
        ))}
      </Slider>
    </div>
  )
}
