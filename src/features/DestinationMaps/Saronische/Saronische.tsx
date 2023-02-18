import { FC, useState } from 'react'

import { Location } from 'shared/types/maps'
import SaronischeItem from './SaronischeItem'

import s from './Saronische.module.scss'

interface SporadenProps {
  location: Location[]
}

const Saronische: FC<SporadenProps> = ({ location }) => {
  const [isShownCard, setIsShownCard] = useState<number | null>(null)

  return (
    <div className={s.container}>
      {location.map(item => (
        <SaronischeItem
          key={item.id}
          isShownCard={isShownCard == item.id ? isShownCard : null}
          setIsShownCard={setIsShownCard}
          item={item}
        />
      ))}
    </div>
  )
}

export default Saronische
