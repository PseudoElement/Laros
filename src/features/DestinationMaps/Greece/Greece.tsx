import { useState } from 'react'

import { Maps } from 'shared/mocks/maps'
import GreeceMap from './GreeceMap'

import s from './Greece.module.scss'

const Greece = () => {
  const [isShown, setIsShown] = useState(false)
  const [currentShown, setCurrentShown] = useState(0)

  return (
    <div className={s.container}>
      {Maps.Greece.map(item => (
        <GreeceMap
          key={item.id}
          isShown={isShown}
          setIsShown={setIsShown}
          setCurrentShown={setCurrentShown}
          currentShown={currentShown}
          item={item}
        />
      ))}
    </div>
  )
}

export default Greece
