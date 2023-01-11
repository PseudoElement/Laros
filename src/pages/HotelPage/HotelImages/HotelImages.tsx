import { FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { Gallery, SliderGalery } from 'components'

import { withDomain } from 'shared/helpers/withDomain'

import s from './HotelImages.module.scss'
import {useWindowDimensions} from '../../../shared/hooks/useWindowDimensions';

interface HotelImagesProps {
  images: string[] | StaticImageData[] | HTMLImageElement[]
}

export const HotelImages: FC<HotelImagesProps> = ({ images }) => {
  const [openGallery, setOpenGallery] = useState<number | null>(null)

  const { width } = useWindowDimensions()

  const handleOpen = (index: number) => {
    setOpenGallery(index)
  }

  const slidesPerViewHotelImages = (width: number) => {
    if (width > 1024) return 3
    if (width < 1024 && width >= 520) return 2
    if (width < 520) return 1
  }

  return (
    <div className={s.hotelImages}>
      {images?.length ? (
        <SliderGalery slidesPerView={slidesPerViewHotelImages(width)}>
          {images.map((image, index) => (
            <div
              key={index}
              className={s.hotelImage}
              onClick={() => handleOpen(index)}
            >
              {/*<Image layout={'fill'} src={withDomain(image)} alt='' />*/}
              <Image layout={'fill'} src={image} alt='' />
            </div>
          ))}
        </SliderGalery>
      ) : null}
      <Gallery images={images} isOpen={openGallery} onClose={setOpenGallery}/>
    </div>
  )
}
