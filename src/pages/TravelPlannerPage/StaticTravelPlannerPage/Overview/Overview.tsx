import { FC, useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper'
import cn from 'classnames'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ReactPlayer, TruncatedText } from 'components'
import { SliderItem } from './SliderItem'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import { Overview, StaticTravelItem } from 'shared/types/staticTravel'
import { TRIP_PLAN_DESCRIPTION_SIZE } from 'shared/constants'

import s from './Overview.module.scss'

interface OverviewSectionProps {
  description?: string
  overview: Overview
}
export const OverviewSection: FC<OverviewSectionProps> = ({
  description,
  overview,
}) => {
  const [initialSlide, setInitialSlide] = useState<number>(0)
  const swiperRef = useRef<any>(null)
  const widthWindow = useWindowDimensions().width

  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(initialSlide)
  }, [initialSlide])

  return (
    <div className={s.wrapper}>
      <div className={s.contentWrapper}>
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
            {overview?.images?.map((image, id) => (
              <SwiperSlide onMouseEnter={() => setInitialSlide(id)} key={id}>
                {/*{!card.video ? (*/}
                <div className={s.slideImage}>
                  <Image layout={'fill'} src={image} />
                </div>
                {/*) : (*/}
                {/*  <div className={s.videoWrapper}>*/}
                {/*    <ReactPlayer*/}
                {/*      playing={initialSlide === id}*/}
                {/*      controls*/}
                {/*      width={'100%'}*/}
                {/*      url={card.video}*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*)}*/}
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
          {overview?.images?.map((image, id) => (
            <SliderItem
              setInitialSlide={() => setInitialSlide(id)}
              active={initialSlide === id}
              image={image}
              // isVideo={!!card.video}
              id={id}
              key={id}
            />
          ))}
        </div>

        {description ? (
          <TruncatedText
            className={s.text}
            limit={TRIP_PLAN_DESCRIPTION_SIZE}
            seeMoreClass={s.seeMore}
          >
            {description}
          </TruncatedText>
        ) : null}
      </div>
    </div>
  )
}
