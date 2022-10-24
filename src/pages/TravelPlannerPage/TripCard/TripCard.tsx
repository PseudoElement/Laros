import { Button } from 'components/Button'
import { FlightIcon, SaleIcon } from 'components/icons'
import { FC } from 'react'
import { generateTagText } from 'shared/helpers/tripCard'
import s from './TripCard.module.scss'
import cn from 'classnames'
import { Currency } from 'shared/types'

interface TripCardProps {
  id: number
  image: string
  region: string
  from: number
  period: string
  duration: number
  start: string
  tags: string[]
  sale?: number
  wide?: boolean
}

export const TripCard: FC<TripCardProps> = props => {
  return (
    <div className={cn(s.wrapper, { [s.wide]: props.wide })}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        {props.sale && (
          <div className={s.sale}>
            {`- ${props.sale}% OFF `}
            <SaleIcon />
          </div>
        )}
      </div>
      <div className={s.main}>
        <div className={s.row}>
          <div className={s.regionName}>
            <div className={s.meta}>Region Name</div>
            <div>{props.region}</div>
          </div>
          <div className={s.fromWrapper}>
            <div className={s.meta}>From</div>
            <div className={s.from}>{`${props.from} ${Currency.CHF}`}</div>
            <div className={s.meta}>Pro Person</div>
          </div>
        </div>
        <div className={s.row}>
          <div className={s.periodWrapper}>
            <div className={s.meta}>Travel Period</div>
            <div className={s.period}>{props.period}</div>
          </div>
          <div className={s.durationWrapper}>
            <div className={s.meta}>Duration</div>
            <div className={s.duration}>{`${props.duration} Days`}</div>
          </div>
        </div>
        <div className={s.lastRow}>
          <div className={s.meta}>
            <FlightIcon />
            {` Flight Start Srom ${props.start}`}
          </div>
          <div className={s.tags}>
            {props.tags.map(tag => (
              <div className={s[tag]}>{generateTagText(tag)}</div>
            ))}
          </div>
        </div>
        <Button classname={s.myButton}>View Offer</Button>
      </div>
    </div>
  )
}
