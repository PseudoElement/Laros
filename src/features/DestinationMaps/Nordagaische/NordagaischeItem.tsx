import { FC, memo, useEffect, useState } from 'react'

import { formattedTitle } from 'shared/helpers/formatedTitle'
import { MapProps } from '../Greece/GreeceMap'

import RegionCard from 'components/RegionCard/RegionCard'

import cn from 'classnames'
import s from './Nordagaische.module.scss'
import { useRouter } from 'next/router'

const NordagaischeItem: FC<MapProps> = ({
  item,
  isShownCard,
  setIsShownCard,
}) => {
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
      <div className={cn(s[`${title}`], s.title)}>{item.cardTitle}</div>
      <RegionCard
        className={s[`regionCard${title}`]}
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

export default memo(NordagaischeItem)
