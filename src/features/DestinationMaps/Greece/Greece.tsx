import { FC, useState } from 'react'
import cn from 'classnames'

import GreeceMap from './GreeceMap'

import { mockMaps } from 'shared/mocks/maps'
import { Location } from 'shared/types/maps'

import s from './Greece.module.scss'

interface GreeceProps {
  location: Location[]
}

const Greece: FC<GreeceProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)
  console.log(location);
  
  return (
    <div className={s.container}>
      {location
        // .filter(locate => locate.cardTitle !== 'Saronische inseln')
        .map(locate => {
          const currentMap = mockMaps.Greece.find(
            map => locate.cardTitle === map.cardTitle
          )

          return (
            <div key={locate.id} className={cn(s[`sub__gr${locate.id||11}`])}>
              <GreeceMap
                key={locate.id}
                isShownCard={isShownCard == locate.id ? isShownCard : null}
                setIsShownCard={setIsShownCard}
                regionCardItem={locate}
                item={{ ...locate, map: currentMap?.map }}
              />
            </div>
          )
        })}
    </div>
  )
}

export default Greece
