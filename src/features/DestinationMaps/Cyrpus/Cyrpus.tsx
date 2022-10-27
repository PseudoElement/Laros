import { FC, useState } from 'react'

import { Maps } from 'shared/mocks/Maps/maps'

import CyrpusItem from './CyrpusItem'

import s from './Cyrpus.module.scss'

const Cyrpus: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {Maps.Cyrpus.map(item => (
        <CyrpusItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Cyrpus
