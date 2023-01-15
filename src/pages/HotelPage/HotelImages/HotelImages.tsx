import { FC, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { Gallery, SliderGalery } from 'components'

import { withDomain } from 'shared/helpers/withDomain'
import { slidesPerViewHotelImages } from '../../../shared/helpers/slidesPerView'

import s from './HotelImages.module.scss'
import { useWindowDimensions } from '../../../shared/hooks/useWindowDimensions'

interface HotelImagesProps {
  images: string[] | StaticImageData[] | HTMLImageElement[]
}

export const HotelImages: FC<HotelImagesProps> = ({ images }) => {
  const [openGallery, setOpenGallery] = useState<number | null>(null)

  const { width } = useWindowDimensions()

  const handleOpen = (index: number) => {
    setOpenGallery(index)
  }
  return (
    <div className={s.hotelImages}>
      {images?.length ? (
        <SliderGalery
          slidesPerView={slidesPerViewHotelImages(width)}
          onSlice={2}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={s.hotelImage}
              onClick={() => handleOpen(index)}
            >
              <Image layout={'fill'} src={withDomain(image)} alt='' />
            </div>
          ))}
        </SliderGalery>
      ) : null}
      <Gallery
        images={images}
        isOpen={openGallery}
        onClose={setOpenGallery}
        onSlice={2}
      />
    </div>
  )
}
