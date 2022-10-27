import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'

import { Map as MapType } from 'shared/mocks/Maps/maps'
import RegionCard from 'components/RegionCard/RegionCard'

import s from './Greece.module.scss'

export interface MapProps {
  isShownCard: number | null
  setIsShownCard: Dispatch<SetStateAction<number | null>>
  item: MapType
}

const GreeceMap = ({ item, setIsShownCard, isShownCard }: MapProps) => {
  const onClose = () => setIsShownCard(null)

  return (
    <div className={s.wrapper}>
      <Link href={`/destinations/areas/${item.id}`}>
        <img
          height={item.image?.height}
          width={item.image?.width}
          src={item.image?.src}
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
