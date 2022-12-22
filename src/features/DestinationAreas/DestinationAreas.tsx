import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import s from './DestinationAreas.module.scss'

export interface DestinationAreasProps {
  name: string
  areas: string[] | StaticImageData[] | HTMLImageElement[]
}

const DestinationAreas: FC<DestinationAreasProps> = ({ name, areas }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Areas of {name}</h3>

      <p className={s.description}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </p>

      <div className={s.wrapperImages}>
        {areas.map((area, index) => (
          <div className={s.areasImage} key={index}>
            {/*TODO add a block with text and place it by positioning*/}
            <Image key={`${area}-${index}`} src={area} layout={'fill'} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DestinationAreas
