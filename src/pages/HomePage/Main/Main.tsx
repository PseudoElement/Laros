import { FC, useRef } from 'react'
import Image from 'next/image'
import screenfull from 'screenfull'

import { ReactPlayer } from 'components'
import { SelectBlock } from './Select'

import { Destination } from 'shared/types/destinations'
import { TripCategory } from 'shared/types/trip'
import { useTranslate } from 'shared/hooks/useTranslate'

import play from '/public/assets/images/homepage/play.png'

import s from './Main.module.scss'

export interface MainBlockProps {
  setActiveMenu: (active: boolean) => void
  setVideoIsFullscreen: (isFullscreen: boolean) => void
  activeMenu: boolean
  videoIsFullscreen: boolean
  onFullScreen?: () => void
  destinations: Destination[]
  travelTypes: TripCategory[]
}

export const Main: FC<MainBlockProps> = ({
  activeMenu,
  setActiveMenu,
  videoIsFullscreen,
  setVideoIsFullscreen,
  destinations,
  travelTypes,
  onFullScreen,
}) => {
  const t = useTranslate()

  return (
    <div className={s.main}>
      <div className={s.main_wrapper}>
        <div className={s.main_text}>
          <h1 className={s.title}>{t('homepage.title')}</h1>
          <p className={s.subtitle}>{t('homepage.subTitle')}!</p>
          <div className={s.select} onClick={e => e.stopPropagation()}>
            <SelectBlock
              destinations={destinations}
              setActiveMenu={setActiveMenu}
              activeMenu={activeMenu}
            />
          </div>
        </div>
        <div className={s.main_blur} />
      </div>

      <div className={s.video}>
        <div onClick={onFullScreen} className={s.play_icon}>
          <Image src={play} layout={'fixed'} />
        </div>
      </div>
    </div>
  )
}
