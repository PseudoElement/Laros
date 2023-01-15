import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import RegionCard from 'components/RegionCard/RegionCard'
import { Location } from 'shared/types/maps'
import { getPath } from 'shared/helpers/getPath'

import s from './Greece.module.scss'

export interface MapProps {
  isShownCard: number | null
  setIsShownCard: Dispatch<SetStateAction<number | null>>
  item: Location
  regionCardItem?: Location
}

const GreeceMap = ({
  item,
  setIsShownCard,
  isShownCard,
  regionCardItem,
}: MapProps) => {
  const { asPath } = useRouter()

  const onClose = () => setIsShownCard(null)
  const route = getPath(asPath)

  return (
    <>
      <Link href={`/destinations/${route}/${item.id}`}>
        {
          <item.map
            onMouseEnter={() => setIsShownCard(item.id)}
            className={s[`map${item.id}`]}
          />
        }
      </Link>

      {regionCardItem && (
        <RegionCard
          id={regionCardItem.id}
          cardText={regionCardItem.cardText}
          image={regionCardItem.image}
          title={regionCardItem.cardTitle}
          link={regionCardItem.link}
          className={s[`cartShown_${regionCardItem.id}`]}
          onClose={onClose}
          isOpen={isShownCard === regionCardItem.id}
        />
      )}
    </>
  )
}

export default GreeceMap
