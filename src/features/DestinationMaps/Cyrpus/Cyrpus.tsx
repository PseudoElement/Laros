import { useState } from 'react'

import { Maps } from 'shared/mocks/maps'

import CyrpusMap from '/public/assets/images/destinations/Cyrpus.png'
import CyrpusLocation from './CyrpusLocation'

import ToolTip from 'components/ToolTip/ToolTip'

import s from './Cyrpus.module.scss'

const Cyrpus = () => {
  const [isShown, setIsShown] = useState(false)
  const [currentShown, setCurrentShown] = useState(0)

  return (
    <div className={s.container}>
      {Maps.Cyrpus.map(map => (
        <CyrpusLocation
          key={map.id}
          isShown={isShown}
          setIsShown={setIsShown}
          setCurrentShown={setCurrentShown}
          currentShown={currentShown}
          map={map}
        />
      ))}
    </div>
  )
}

export default Cyrpus
