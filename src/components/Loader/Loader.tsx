import Image from 'next/image'

import s from './Loader.module.scss'
import LoaderGif from '../../../public/assets/images/loader/loader__transparent.gif'

export const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <Image src={LoaderGif} alt='loader' />
    </div>
  )
}
