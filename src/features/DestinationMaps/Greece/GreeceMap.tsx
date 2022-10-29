import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import RegionCard from 'components/RegionCard/RegionCard'
import { Map } from 'shared/types/maps'

import s from './Greece.module.scss'

export interface MapProps {
  isShownCard: number | null
  setIsShownCard: Dispatch<SetStateAction<number | null>>
  item: Map
}

const GreeceMap = ({ item, setIsShownCard, isShownCard }: MapProps) => {
  const onClose = () => setIsShownCard(null)

  return (
    <div className={s.wrapper}>
      <Link href={`/destinations/areas/${item.id}`}>
        <Image
          height={item.image?.height}
          width={item.image?.width}
          src={item.image?.src!}
          onMouseEnter={() => setIsShownCard(item.id)}
        />
      </Link>

      <RegionCard
        id={item.id}
        cartText={item.cartText}
        title={item.cartTitle}
        link={item.link}
        className={s[`destination__cartShown_${item.id}`]}
        onClose={onClose}
        isOpen={isShownCard == item.id}
      />
    </div>
  )
}

export default GreeceMap
