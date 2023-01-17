import { Review } from 'features'
import { Slider } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { slidesPerViewTestimonials } from 'shared/helpers/slidesPerView'

import { reviewsMock } from 'shared/mocks/reviews'
import { LAPTOP_SCREEN } from 'shared/constants/screenResolutions'

import s from './TestimonialsPage.module.scss'

export const TestimonialsPage = () => {
  const t = useTranslate()

  const { width } = useWindowDimensions()

  return (
    <div className={s.page}>
      <h1 className={s.title}>{t('testimonials.title')}</h1>
      <p className={s.description}>{t('testimonials.description')}</p>

      <Slider
        slidesPerView={slidesPerViewTestimonials(width)}
        spaceBetween={25}
        withNavigation={width > LAPTOP_SCREEN}
        withPagination={true}
        classname={s.slider}
        nextEl={s.buttonNext}
        prevEl={s.buttonPrev}
      >
        {reviewsMock.map(review => (
          <Review
            key={review.id}
            withImages={false}
            withAvatar={false}
            {...review}
          />
        ))}
      </Slider>
    </div>
  )
}
