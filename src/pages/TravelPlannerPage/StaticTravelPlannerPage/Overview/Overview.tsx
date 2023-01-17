import { FC, useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper'
import cn from 'classnames'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ReactPlayer, TruncatedText } from 'components'
import { SliderItem } from './SliderItem'

import { Overview } from 'shared/types/staticTravel'
import { TRIP_PLAN_DESCRIPTION_SIZE } from 'shared/constants'

import s from './Overview.module.scss'
import { useWindowDimensions } from '../../../../shared/hooks/useWindowDimensions'
import { useAppSelector } from '../../../../shared/hooks/redux'
import { useRouter } from 'next/router'

interface SliderProps {
  cards: Overview[]
}

export const OverviewSection: FC<SliderProps> = ({ cards }) => {
  const [initialSlide, setInitialSlide] = useState<number>(0)
  const swiperRef = useRef<any>(null)
  const widthWindow = useWindowDimensions().width
  const { query } = useRouter()

  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(initialSlide)
  }, [initialSlide])

  const travelPlannerCategory = useAppSelector(
    state => state.trips.categories
  ).find(page => page.id === (query.index && +query.index))

  return (
    <div className={s.wrapper}>
      <div className={s.contentWrapper}>
        <h3 className={s.subtitle}>Overview</h3>
        <p className={s.text}>
          Orci, diam at urna tellus pellentesque. Lacus turpis pharetra id eget
          ullamcorper. Interdum risus, est, at viverra ullamcorper tortor,
          sagittis, ut et. Massa molestie vel odio nunc, facilisi. Eu, porttitor
          sagittis facilisis in iaculis molestie. Ultricies neque turpis ac non
          pharetra, enim, ornare.
        </p>

        <div className={s.slider}>
          <Swiper
            // @ts-ignore
            ref={swiperRef}
            slidesPerView={1}
            modules={[Navigation]}
            spaceBetween={50}
            autoHeight={true}
            navigation={{
              nextEl: '.nextEl',
              prevEl: '.prevEl',
            }}
          >
            {cards.map((card, id) => (
              <SwiperSlide onMouseEnter={() => setInitialSlide(id)} key={id}>
                {!card.video ? (
                  <div className={s.slideImage}>
                    <Image layout={'fill'} src={card.preview} />
                  </div>
                ) : (
                  <div className={s.videoWrapper}>
                    <ReactPlayer
                      playing={initialSlide === id}
                      controls
                      width={'100%'}
                      url={card.video}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {widthWindow > 768 ? (
            <div className={s.sliderNavigation}>
              <div
                onClick={() => setInitialSlide(initialSlide - 1)}
                className={cn(s.prevEl, 'prevEl', 'swiper-button-prev')}
              />
              <div
                onClick={() => setInitialSlide(initialSlide + 1)}
                className={cn(s.nextEl, 'nextEl', 'swiper-button-next')}
              />
            </div>
          ) : null}
        </div>

        <div className={s.sliderItems}>
          {cards.map((card, id) => (
            <SliderItem
              setInitialSlide={() => setInitialSlide(id)}
              active={initialSlide === id}
              image={card?.preview}
              isVideo={!!card.video}
              id={id}
              key={id}
            />
          ))}
        </div>

        {travelPlannerCategory?.description ? (
          <TruncatedText
            className={s.text}
            limit={TRIP_PLAN_DESCRIPTION_SIZE}
            seeMoreClass={s.seeMore}
          >
            {travelPlannerCategory.description}
          </TruncatedText>
        ) : null}
      </div>
    </div>
  )
}
