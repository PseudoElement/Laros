import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Polis from '/public/assets/images/destinations/Polis.svg'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { MapProps } from '../Greece/GreeceMap'

import ToolTip from 'components/ToolTip/ToolTip'

import s from './Cyrpus.module.scss'
import cn from 'classnames'

const CyrpusLocation: FC<MapProps> = ({
  isShown,
  setIsShown,
  setCurrentShown,
  currentShown,
  map,
}) => {
  const [className, setClassName] = useState({
    className: '',
    location: '',
  })

  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    currentShown === map.id && setIsShown(false)
  }

  useClickOutside(ref, handleClickOutside)

  useEffect(() => {
    switch (map.cartTitle) {
      case 'Polis':
        setClassName(s.polis)
        break
      case 'Goudi':
        setClassName(s.goudi)
        break
      case 'Lysos':
        setClassName(s.lysos)
        break
      case 'Miliou':
        setClassName(s.miliou)
        break
      case 'Paphos':
        setClassName(s.paphos)
        break
      case 'Omodos':
        setClassName(s.omodos)
        break
      case 'Kakopetria':
        setClassName(s.kakopetria)
        break
      case 'Kalavassos':
        setClassName(s.kalavassos)
        break
      case 'Lemesso':
        setClassName(s.lemesso)
        break
      case 'Tochni':
        setClassName(s.tochni)
        break
      case 'Chirokita':
        setClassName(s.chirokita)
        break
      case 'Lefkosia':
        setClassName(s.lefkosia)
        break
      case 'Larnaca':
        setClassName(s.larnaca)
        break
      case 'Agia Napa':
        setClassName(s.agiaNapa)
        break
      default:
        break
    }
  }, [map.cartTitle])

  return (
    <div
      onMouseEnter={() => {
        setCurrentShown(map.id)
        setIsShown(true)
      }}
      ref={ref}
      className={s.test}
    >
      <ToolTip
        placement={'top'}
        title={
          <div className={cn(s.destination__cartShown)}>
            <div className={s.destination__cartPicture}>
              <Image src={Polis} alt='cart picture image' />
            </div>
            <h3 className={s.destination__cartTitle}>{map.cartTitle}</h3>
            <p className={s.destination__cartText}>{map.cartText}</p>
            <div className={s.link__blockDestinationMap}>
              <Link
                className={s.link__detailCartMap}
                href={'/destinations/paphos'}
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        }
      >
        <div className={className}>{map.cartTitle}</div>
      </ToolTip>
    </div>
  )
}

export default CyrpusLocation
