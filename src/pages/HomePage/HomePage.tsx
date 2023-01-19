import { FC, useEffect, useRef, useState } from 'react'

import { Main } from './Main'
import { Subscribe } from './Subscribe'
import { Explore } from './Explore'
import { PostBlock } from './Posts'
import { WhoWeAre } from './WhoWeAre'
import { Comments } from './Comments'
import { SelectComponent } from './SelectedType'
import { ReactPlayer } from 'components'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import { getTripCategoriesThunk } from 'store/slices/trips/thunk'

import { PostsMock } from 'shared/mocks/posts'
import { AboutItemsMock } from 'shared/mocks/whoweare'
import { reviewsMock } from 'shared/mocks/reviews'
import screenfull from 'screenfull'

import s from './HomePage.module.scss'
import { useGetBlogs } from '../../shared/hooks/useGetBlogs'

export const HomePage: FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [videoIsFullscreen, setVideoIsFullscreen] = useState<boolean>(true)
  const videoRef = useRef<HTMLDivElement>(null)
  const BLOGS_PER_PAGE = 3
  const [blogs, isLoading, handleReady] = useGetBlogs({ size: BLOGS_PER_PAGE })

  const onFullScreen = () => {
    setVideoIsFullscreen(true)
    if (screenfull.isEnabled && videoRef.current) {
      screenfull.request(videoRef.current)
    }
  }
  const dispatch = useAppDispatch()
  const destinations = useAppSelector(state => state.destinations.destinations)

  const travelTypes = useAppSelector(state => state.trips.categories)
  useEffect(() => {
    dispatch(getDestinationsThunk())
    dispatch(getTripCategoriesThunk())
  }, [])

  return (
    <div
      onMouseEnter={() => setVideoIsFullscreen(true)}
      onClick={() => setActiveMenu(false)}
    >
      <div
        onMouseLeave={() => setVideoIsFullscreen(true)}
        ref={videoRef}
        className={s.reactPlayerWrapper}
      >
        <div className={s.video}>
          <ReactPlayer
            controls={false}
            width={'110%'}
            stopOnUnmount
            height={'110%'}
            playing={videoIsFullscreen}
            muted
            url={'https://www.youtube.com/watch?v=YnvOQji6zZ0&t=26s'}
          />
        </div>
      </div>

      <Main
        setVideoIsFullscreen={setVideoIsFullscreen}
        videoIsFullscreen={videoIsFullscreen}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        destinations={destinations}
        onFullScreen={onFullScreen}
        travelTypes={travelTypes}
      />

      <SelectComponent travelTypes={travelTypes} />
      <WhoWeAre items={AboutItemsMock} />

      <Explore destinations={destinations} />
      {Boolean(blogs.length) && <PostBlock posts={blogs} />}

      <div className={s.commentsWrapper}>
        <Comments comments={reviewsMock} />
      </div>

      <Subscribe />
    </div>
  )
}
