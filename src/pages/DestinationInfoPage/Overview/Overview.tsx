import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import { SliderGalery } from 'components'

import s from './Overview.module.scss'

interface Overview {
  images: string[] | StaticImageData[] | HTMLImageElement[]
  overview: string
}

export const Overview: FC<Overview> = ({ images, overview }) => {
  return (
    <div className={s.overview}>
      <div className={s.title}>Overview</div>

      <div className={s.subTitle}>{overview}</div>

      <div className={s.overviewSlider}>
        {images?.length ? (
          <SliderGalery>
            {images.map((image, index) => (
              <div key={index} className={s.image}>
                <Image width={1000} height={500} src={image} alt='' />
              </div>
            ))}
          </SliderGalery>
        ) : null}
      </div>
    </div>
  )
}
