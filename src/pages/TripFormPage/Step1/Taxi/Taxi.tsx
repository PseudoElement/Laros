import s from './Taxi.module.scss'
import Image from 'next/image'
import exchange from '/public/assets/images/exchange.svg?url'
import car from '/public/assets/images/carBlackIcon.svg?url'
import { FC } from 'react'
import { useTranslate } from 'shared/hooks/useTranslate'

interface TaxiProps {
  destination_name: string
  type_name: string
}

export const Taxi: FC<TaxiProps> = ({ destination_name, type_name }) => {
  const t = useTranslate()
  const [from, to] = type_name.split('-')

  return (
    <div className={s.taxiContainer}>
      <div className={s.taxiBlock}>
        <div className={s.taxiIcon}>
          <Image src={exchange} alt='' width={24} height={28} />
        </div>
      </div>
      <div className={s.taxiInfo}>
        <div className={s.taxiTitle}>{t('worldwideTours.label13')}: </div>
        <div className={s.taxiRoute}>
          {from} &gt; {`${to}, ${destination_name}`}
        </div>
        <div className={s.taxiOption}>
          <Image src={car} alt='' width={15} height={15} />
          {t('tripSteps.transfer.carPickUp')}
        </div>
      </div>
    </div>
  )
}
