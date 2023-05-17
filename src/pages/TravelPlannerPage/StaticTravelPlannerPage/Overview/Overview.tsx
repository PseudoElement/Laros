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
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const swiperRef = useRef<any>(null)
  const widthWindow = useWindowDimensions().width

  const changeSlide = (type: 1 | -1): void => {
    switch (type) {
      case 1:
        if (activeSlide === 0) return
        setActiveSlide(activeSlide - 1)
        break
      case -1:
        if (activeSlide === overview.images.length - 1) return
        setActiveSlide(activeSlide + 1)
        break
    }
  }

  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(activeSlide)
  }, [activeSlide])

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
            onSlideChange={sliderInfo => setActiveSlide(sliderInfo.activeIndex)}
          >
            {overview?.images?.map((image, id) => (
              <SwiperSlide key={id}>
                {/*{!card.video ? (*/}
                <div className={s.slideImage}>
                  <Image layout={'fill'} src={image} />
                </div>
                {/*) : (*/}
                {/*  <div className={s.videoWrapper}>*/}
                {/*    <ReactPlayer*/}
                {/*      playing={activeSlide === id}*/}
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
                onClick={() => changeSlide(1)}
                className={cn(s.prevEl, 'prevEl', 'swiper-button-prev')}
              />
              <div
                onClick={() => changeSlide(-1)}
                className={cn(s.nextEl, 'nextEl', 'swiper-button-next')}
              />
            </div>
          ) : null}
        </div>

        <div className={s.sliderItems}>
          {overview?.images?.map((image, id) => (
            <SliderItem
              setActiveSlide={() => setActiveSlide(id)}
              active={activeSlide === id}
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
