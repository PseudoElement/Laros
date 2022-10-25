import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import CardImage from '/public/assets/images/destinations/central-macedonia.png'
import { Map as MapType } from 'shared/mocks/maps'
import { useClickOutside } from 'shared/hooks/useClickOutside'

import cn from 'classnames'
import s from './Greece.module.scss'

export interface MapProps {
  isShown: boolean
  setIsShown: Dispatch<SetStateAction<boolean>>
  setCurrentShown: Dispatch<SetStateAction<number>>
  currentShown: number
  map: MapType
}

const GreeceMap = ({
  isShown,
  setIsShown,
  setCurrentShown,
  currentShown,
  map,
}: MapProps) => {
  const [className, setClassName] = useState({
    img: '',
    cartShown: '',
  })

  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    currentShown === map.id && setIsShown(false)
  }

  useClickOutside(ref, handleClickOutside)

  useEffect(() => {
    switch (map.id) {
      case 1:
        setClassName({ img: s.sub__gr1, cartShown: s.destination__cartShown_1 })
        break
      case 2:
        setClassName({ img: s.sub__gr2, cartShown: s.destination__cartShown_2 })
        break
      case 3:
        setClassName({ img: s.sub__gr3, cartShown: s.destination__cartShown_3 })
        break
      case 4:
        setClassName({ img: s.sub__gr4, cartShown: s.destination__cartShown_4 })
        break
      case 5:
        setClassName({ img: s.sub__gr5, cartShown: s.destination__cartShown_5 })
        break
      case 6:
        setClassName({ img: s.sub__gr6, cartShown: s.destination__cartShown_6 })
        break
      case 7:
        setClassName({ img: s.sub__gr7, cartShown: s.destination__cartShown_7 })
        break
      case 8:
        setClassName({ img: s.sub__gr8, cartShown: s.destination__cartShown_8 })
        break
      case 9:
        setClassName({ img: s.sub__gr9, cartShown: s.destination__cartShown_9 })
        break
      case 10:
        setClassName({
          img: s.sub__gr10,
          cartShown: s.destination__cartShown_10,
        })
        break
    }
  }, [map.id])
  return (
    <>
      <Link href={map.link}>
        <img
          height={map.image?.height}
          width={map.image?.width}
          src={map.image?.src}
          onMouseEnter={() => {
            setCurrentShown(map.id)
            setIsShown(true)
          }}
          className={className.img}
        />
        {/*<Image*/}
        {/*  src={map.image}*/}
        {/*  className={className}*/}
        {/*  onMouseEnter={() => {*/}
        {/*    setCurrentShown(map.id)*/}
        {/*    setIsShown(true)*/}
        {/*  }}*/}
        {/*/>*/}
      </Link>

      <motion.div>
        <AnimatePresence>
          {/*<motion.div*/}
          {/*  key='question'*/}
          {/*  className={s.motion}*/}
          {/*  onClick={() => setIsShown(prev => !prev)}*/}
          {/*/>*/}
          {isShown && (
            <motion.div
              key='answer'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className={s.isShownMotion}
            >
              <div ref={ref}>
                {currentShown === map.id && (
                  <div
                    className={
                      isShown
                        ? cn(s.destination__cartShown, className.cartShown)
                        : s.hidden
                    }
                  >
                    <div className={s.destination__cartPicture}>
                      <Image
                        width={240}
                        height={135}
                        src={CardImage}
                        alt='cart picture image'
                      />
                    </div>
                    <h3 className={s.destination__cartTitle}>
                      Central Macedonia
                    </h3>
                    <p className={s.destination__cartText}>
                      At ultrices rhoncus sit vel viverra viverra. Arcu
                      pellentesque gravida in orci, pretium nulla volutpat leo.
                    </p>
                    <div className={s.link__blockDestinationMap}>
                      <Link href={'/destinations/area'}>
                        <span className={s.link__detailCartMap}>
                          Learn more
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default GreeceMap
