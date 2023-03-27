import { FC, useEffect, useRef, useState } from 'react'
import s from './HighlightedItem.module.scss'
import cls from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { Pagination } from 'swiper'
import { TruncatedText } from '../../../../../components'
import { JOB_CARD_TEXT_LIMIT } from '../../../../../shared/constants'

interface HighlightedItemProps {
  text: string
  title: string
  link?: string
  images: string[] | StaticImageData[]
}

export const HighlightedItem: FC<HighlightedItemProps> = ({
  images,
  title,
  text,
}) => {
  const [initialSlide, setInitialSlide] = useState<number>(0)
  const sliderRef = useRef<any>(null)

  useEffect(() => {
    sliderRef?.current?.swiper.slideTo(initialSlide)
  }, [initialSlide])

  return (
    <div className={cls(s.wrapper)}>
      <div className={s.sliderWrapper}>
        <Swiper
          // @ts-ignore
          ref={sliderRef}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {images.map((image, id: number) => (
            <SwiperSlide onMouseEnter={() => setInitialSlide(id)} key={id}>
              <Image height={203} width={543} layout={'fixed'} src={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.pagination}>
          {images.map((image, id: number) => (
            <div
              onClick={() => setInitialSlide(id)}
              key={id}
              className={cls(s.paginationItem, {
                [s.activePagination]: initialSlide === id,
              })}
            />
          ))}
        </div>
      </div>

      <div className={s.title}>{title}</div>

      <TruncatedText className={s.text} limit={JOB_CARD_TEXT_LIMIT}>
        {text}
      </TruncatedText>
    </div>
  )
}
