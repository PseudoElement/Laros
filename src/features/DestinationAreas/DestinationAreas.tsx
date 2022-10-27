import Image from 'next/image'

import Western from '/public/assets/images/destinations/Macedonia/Western Macedonia.png'
import Eastern from '/public/assets/images/destinations/Macedonia/Eastern Macedonia.png'
import Central from '/public/assets/images/destinations/Macedonia/Central Macedonia.png'

import s from './DestinationAreas.module.scss'

const DestinationAreas = () => {
  const images = [Western, Central, Eastern]

  return (
    <div className={s.container}>
      <h3 className={s.title}>Areas of Macedonia</h3>
      <p className={s.description}>
        At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida
        in orci, pretium nulla volutpat leo.
      </p>
      <div className={s.wrapperImages}>
        {images.map(image => (
          <Image key={image.src} src={image} alt='' />
        ))}
      </div>
    </div>
  )
}

export default DestinationAreas
