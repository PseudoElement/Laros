import { FC, useState } from 'react'

import { Maps } from 'shared/mocks/Maps/maps'
import GreeceMap from './GreeceMap'

import s from './Greece.module.scss'
import cn from 'classnames'

const Greece: FC = () => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {Maps.Greece.map(item => (
        <div key={item.id} className={cn(s[`sub__gr${item.id}`])}>
          <GreeceMap
            key={item.id}
            isShownCard={isShownCard == item.id ? isShownCard : null}
            setIsShownCard={setIsShownCard}
            item={item}
          />
        </div>
      ))}
    </div>
  )
}

export default Greece
