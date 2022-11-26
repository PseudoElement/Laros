import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Button } from 'components/Button'
import Image from 'next/image'
import cn from 'classnames'
import s from './Gallery.module.scss'

interface GalleryItem {
  image: string
  id: number
}

interface GalleryProps {
  images: GalleryItem[]
  isOpen: number | null
  onClose: (value: number | null) => void
}

export const Gallery: FC<GalleryProps> = ({ images, isOpen = 0, onClose }) => {

  const swiperRef = useRef<HTMLDivElement>(null)
  const changeSlide = (slideId: number) => {
    swiperRef.current?.swiper.slideTo(slideId)
  }

  return (
    isOpen !== null ?
      <div
        className={cn(s.galleryModal, { [s.hidden]: !isOpen })}
        onClick={() => onClose(null)}
      >
        <div onClick={e => e.stopPropagation()}>
          <Swiper
            initialSlide={isOpen}
            ref={swiperRef}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={s.galleryModalSwiper}
          >
            {images.map(item => (
              <SwiperSlide key={item.id} >
                <div className={s.galleryModalSlide}>
                  <Image
                    onClick={e => e.stopPropagation()}
                    className={s.image}
                    width={1062}
                    height={624}
                    src={item.image}
                  />
                  <Button
                    onClick={() => onClose(null)}
                    variant='outline'
                    type='button'
                    classname={s.exit}
                  >
                    <Image
                      width={53}
                      height={53}
                      src='/assets/images/area-images/exit.svg'
                    />
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.sliderThumbs}>
          {images.map((item, id) => (
            <div
              key={id}
              className={s.sliderThumbItem}
              onClick={e => {
                e.stopPropagation()
                changeSlide(id)
              }}
            >
              <Image width={60} height={36} src={item.image} />
            </div>
          ))}
        </div>
      </div> : null
  )
}