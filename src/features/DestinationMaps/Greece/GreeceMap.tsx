import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CardImage from '/public/assets/images/destinations/central-macedonia.png'
import { Map as MapType } from 'shared/mocks/maps'
import { useClickOutside } from 'shared/hooks/useClickOutside'

import cn from 'classnames'
import s from './Greece.module.scss'

const setClassNames = (itemId: number) => {
  let className

  switch (itemId) {
    case 1:
      className = { img: s.sub__gr1, cartShown: s.destination__cartShown_1 }
      break
    case 2:
      className = { img: s.sub__gr2, cartShown: s.destination__cartShown_2 }
      break
    case 3:
      className = { img: s.sub__gr3, cartShown: s.destination__cartShown_3 }
      break
    case 4:
      className = { img: s.sub__gr4, cartShown: s.destination__cartShown_4 }
      break
    case 5:
      className = { img: s.sub__gr5, cartShown: s.destination__cartShown_5 }
      break
    case 6:
      className = { img: s.sub__gr6, cartShown: s.destination__cartShown_6 }
      break
    case 7:
      className = { img: s.sub__gr7, cartShown: s.destination__cartShown_7 }
      break
    case 8:
      className = { img: s.sub__gr8, cartShown: s.destination__cartShown_8 }
      break
    case 9:
      className = { img: s.sub__gr9, cartShown: s.destination__cartShown_9 }
      break
    case 10:
      className = {
        img: s.sub__gr10,
        cartShown: s.destination__cartShown_10,
      }
      break
    default:
      className = { img: '', cartShown: '' }
      break
  }

  return className
}

export interface MapProps {
  isShown: boolean
  setIsShown: Dispatch<SetStateAction<boolean>>
  setCurrentShown: Dispatch<SetStateAction<number>>
  currentShown: number
  item: MapType
}

const GreeceMap = ({
  isShown,
  setIsShown,
  setCurrentShown,
  currentShown,
  item,
}: MapProps) => {
  const [className, setClassName] = useState({
    img: '',
    cartShown: '',
  })

  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    currentShown === item.id && setIsShown(false)
  }

  useClickOutside(ref, handleClickOutside)

  useEffect(() => {
    const classNames = setClassNames(item.id)

    setClassName(classNames)
  }, [])

  return (
    <>
      <Link href={item.link}>
        <img
          height={item.image?.height}
          width={item.image?.width}
          src={item.image?.src}
          onMouseEnter={() => {
            setCurrentShown(item.id)
            setIsShown(true)
          }}
          className={className.img}
        />
        {/*<Image*/}
        {/*  src={item.image?.src!}*/}
        {/*  width={item.image?.width}*/}
        {/*  height={item.image?.height}*/}
        {/*  className={className.img}*/}
        {/*  onMouseEnter={() => {*/}
        {/*    setCurrentShown(item.id)*/}
        {/*    setIsShown(true)*/}
        {/*  }}*/}
        {/*/>*/}
      </Link>

      {isShown && currentShown === item.id && (
        <div
          ref={ref}
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
          <h3 className={s.destination__cartTitle}>{item.cartTitle}</h3>
          <p className={s.destination__cartText}>{item.cartText}</p>
          <div className={s.link__blockDestinationMap}>
            <Link href={'/destinations/area'}>
              <span className={s.link__detailCartMap}>Learn more</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default GreeceMap
