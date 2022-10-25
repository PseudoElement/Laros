import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Polis from '/public/assets/images/destinations/Polis.svg'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { MapProps } from '../Greece/GreeceMap'

import s from './Cyrpus.module.scss'
import cn from 'classnames'

const setItemClassNames = (name: string) => {
  let className = { className: '', location: '' }

  switch (name) {
    case 'Polis':
      className = { className: s.polis, location: s.polisLocation }
      break
    case 'Goudi':
      className = { className: s.goudi, location: s.goudiLocation }
      break
    case 'Lysos':
      className = { className: s.lysos, location: s.lysosLocation }
      break
    case 'Miliou':
      className = { className: s.miliou, location: s.miliouLocation }
      break
    case 'Paphos':
      className = { className: s.paphos, location: s.paphosLocation }
      break
    case 'Omodos':
      className = { className: s.omodos, location: s.omodosLocation }
      break
    case 'Kakopetria':
      className = {
        className: s.kakopetria,
        location: s.kakopetriaLocation,
      }
      break
    case 'Kalavassos':
      className = {
        className: s.kalavassos,
        location: s.kalavassosLocation,
      }
      break
    case 'Lemesso':
      className = { className: s.lemesso, location: s.lemessoLocation }
      break
    case 'Tochni':
      className = { className: s.tochni, location: s.tochniLocation }
      break
    case 'Chirokita':
      className = { className: s.chirokita, location: s.chirokitaLocation }
      break
    case 'Lefkosia':
      className = { className: s.lefkosia, location: s.lefkosiaLocation }
      break
    case 'Larnaca':
      className = { className: s.larnaca, location: s.larnacaLocation }
      break
    case 'Agia Napa':
      className = { className: s.agiaNapa, location: s.agiaNapaLocation }
      break
    default:
      ''
  }

  return className
}

const CyrpusItem: FC<MapProps> = ({
  isShown,
  setIsShown,
  setCurrentShown,
  currentShown,
  item,
}) => {
  const [className, setClassName] = useState({
    className: '',
    location: '',
  })

  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    currentShown === item.id && setIsShown(false)
  }

  useEffect(() => {
    const classNames = setItemClassNames(item.cartTitle)

    setClassName(classNames)
  }, [])

  useClickOutside(ref, handleClickOutside)

  return (
    <div
      onMouseEnter={() => {
        setCurrentShown(item.id)
        setIsShown(true)
      }}
      className={className.location}
    >
      <div className={className.className}>{item.cartTitle}</div>
      {isShown && currentShown === item.id && (
        <div ref={ref} className={cn(s.destination__cartShown)}>
          <div className={s.destination__cartPicture}>
            <Image src={Polis} alt='cart picture image' />
          </div>
          <h3 className={s.destination__cartTitle}>{item.cartTitle}</h3>
          <p className={s.destination__cartText}>{item.cartText}</p>
          <div className={s.link__blockDestinationMap}>
            <Link href={'/destinations/paphos'}>
              <span className={s.link__detailCartMap}>Learn more</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default CyrpusItem
