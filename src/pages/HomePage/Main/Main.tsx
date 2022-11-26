import s from './Main.module.scss'
import { SelectBlock } from './Select'
import { SelectComponent } from '../SelectedType'
import Image from 'next/image'
import play from '/public/assets/images/homepage/play.png'
import { FC, useRef } from 'react'
import { Destination } from 'shared/types/destinations'
import screenfull from 'screenfull'
import { ReactPlayer } from 'components'
import { TripCategory } from 'shared/types/trip'

export interface MainBlockProps {
  setActiveMenu: (active: boolean) => void
  setVideoIsFullscreen: (isFullscreen: boolean) => void
  activeMenu: boolean
  videoIsFullscreen: boolean
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
}) => {
  const videoRef = useRef<HTMLDivElement>(null)
  const onFullScreen = () => {
    setVideoIsFullscreen(false)
    if (screenfull.isEnabled && videoRef.current) {
      screenfull.request(videoRef.current)
    }
  }

  return (
    <div className={s.main}>
      <div className={s.main_wrapper}>
        <div className={s.main_blur}>
          <div className={s.main_text}>
            <h1 className={s.title}>
              The unique <br /> Swiss Tour Operator
              <br /> for Greece & Cyprus
            </h1>
            <p className={s.subtitle}>
              and able to travel you around the world
            </p>
            <div className={s.select} onClick={e => e.stopPropagation()}>
              <SelectBlock
                destinations={destinations}
                setActiveMenu={setActiveMenu}
                activeMenu={activeMenu}
              />
            </div>
          </div>
          <div className={s.slider}>
            <h3 className={s.selectType_title}>Or browse the selected type</h3>
            <SelectComponent travelTypes={travelTypes} />
          </div>
        </div>
      </div>
      <div className={s.video}>
        <div
          onMouseLeave={() => setVideoIsFullscreen(true)}
          ref={videoRef}
          className={s.reactPlayerWrapper}
        >
          <ReactPlayer
            stopOnUnmount
            controls
            playing={!videoIsFullscreen}
            url={'https://www.youtube.com/watch?v=graxkD8NzEw'}
          />
          :
        </div>
        <div onClick={onFullScreen} className={s.play_icon}>
          <Image src={play} layout={'fixed'} />
        </div>
      </div>
    </div>
  )
}
