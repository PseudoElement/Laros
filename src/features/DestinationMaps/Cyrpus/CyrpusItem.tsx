import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { MapProps } from '../Greece/GreeceMap'

import { formattedTitle } from 'shared/helpers/formatedTitle'
import RegionCard from 'components/RegionCard/RegionCard'

import cn from 'classnames'
import s from './Cyrpus.module.scss'

const CyrpusItem: FC<MapProps> = ({ item, setIsShownCard, isShownCard }) => {
  const { push } = useRouter()
  const [title, setTitle] = useState('')

  const onClose = () => setIsShownCard(null)

  useEffect(() => {
    const newTitle = formattedTitle(item?.cardTitle)

    setTitle(newTitle)
  }, [])

  return (
    <div
      onMouseEnter={() => setIsShownCard(item.id)}
      className={cn(s[`${title}Location`], s.wrapper)}
      onClick={() => push(`/areas/${item.id}`)}
    >
      <div className={s[`${title}`]}>{item.cardTitle}</div>
      <RegionCard
        id={item.id}
        cardText={item.cardText}
        title={item.cardTitle}
        link={item.link}
        image={item.image}
        onClose={onClose}
        isOpen={isShownCard == item.id}
      />
    </div>
  )
}

export default CyrpusItem
