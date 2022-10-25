import { useState } from 'react'

import { Maps } from 'shared/mocks/maps'

import CyrpusItem from './CyrpusItem'

import s from './Cyrpus.module.scss'

const Cyrpus = () => {
  const [isShown, setIsShown] = useState(false)
  const [currentShown, setCurrentShown] = useState(0)

  return (
    <div className={s.container}>
      {Maps.Cyrpus.map(item => (
        <CyrpusItem
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

export default Cyrpus
