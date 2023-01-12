import { FC, useState } from 'react'
import Image from 'next/image'

import { Gallery, SliderGalery } from 'components'
import { AdvantageCard } from './AdvantageCard'

import { useTranslate } from 'shared/hooks/useTranslate'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { slidesPerViewAbout } from 'shared/helpers/slidesPerView'

import { aboutCards } from 'shared/mocks/aboutCards'

import slideImg1 from '/public/assets/images/aboutPage/about/about_us_photo_1.png'
import slideImg2 from '/public/assets/images/aboutPage/about/about_us_photo_2.png'
import slideImg3 from '/public/assets/images/aboutPage/about/about_us_photo_3.png'

import s from './AboutPage.module.scss'

export const AboutPage: FC = () => {
  const images = [slideImg1, slideImg2, slideImg3]
  const [openGallery, setOpenGallery] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenGallery(index)
  }
  const { width } = useWindowDimensions()

  const t = useTranslate()

  return (
    <div className={s.container}>
      <div className={s.containerWrap}>
        <div className={s.wrapper}>
          <div className={s.text}>
            <h1 className={s.title}>{t('about.title')}</h1>
            <p className={s.desc}>{t('about.description')}</p>
          </div>

          <div className={s.cards}>
            {aboutCards.map((card, i) => (
              <AdvantageCard
                key={i}
                title={t(card.title)}
                description={t(card.description)}
              />
            ))}
          </div>
        </div>
      </div>

      <SliderGalery slidesPerView={slidesPerViewAbout(width)}>
        {images.map((item, index) => (
          <div
            className={s.galleryImage}
            key={index}
            onClick={() => handleOpen(index)}
          >
            <Image src={item} layout={'fill'} alt='Image' />
          </div>
        ))}
      </SliderGalery>

      <Gallery images={images} isOpen={openGallery} onClose={setOpenGallery} />

      <div className={s.wrapper}>
        <div className={s.textJustify}>
          <p className={s.desc}>{t('about.lastDescription')}</p>
        </div>
      </div>
    </div>
  )
}
