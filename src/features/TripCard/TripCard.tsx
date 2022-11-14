import { FC } from 'react'
import cn from 'classnames'

import { Button, SaleIcon, TagCard } from 'components'

import { Currency } from 'shared/types'
import { Trip } from 'shared/types/trip'

import s from './TripCard.module.scss'

interface TripCardProps extends Trip {
  wide?: boolean
  onClick?: (id: number) => void
  sale?: string
}

export const TripCard: FC<TripCardProps> = ({
  name,
  wide,
  images = [],
  tags = [],
  price,
  period,
  duration,
  sale,
}) => {
  return (
    <div className={cn(s.wrapper, { [s.wide]: wide })}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url(${images[0]})`,
        }}
      >
        {sale && (
          <div className={s.sale}>
            {`- ${sale}% OFF `}
            <SaleIcon />
          </div>
        )}
      </div>
      <div className={s.main}>
        <div className={s.row}>
          <div className={s.regionName}>
            <div className={s.meta}>Region Name</div>
            <div>{name}</div>
          </div>
          <div className={s.fromWrapper}>
            <div className={s.meta}>From</div>
            <div className={s.from}>{`${price} ${Currency.CHF}`}</div>
            <div className={s.meta}>Pro Person</div>
          </div>
        </div>
        <div className={s.row}>
          <div className={s.periodWrapper}>
            <div className={s.meta}>Travel Period</div>
            <div className={s.period}>{period}</div>
          </div>
          <div className={s.durationWrapper}>
            <div className={s.meta}>Duration</div>
            <div className={s.duration}>{`${duration} Days`}</div>
          </div>
        </div>
        <div className={s.lastRow}>
          <div className={s.tags}>
            {tags.length
              ? tags.map(tag => (
                  <div key={tag.id} className={s.tag}>
                    <TagCard id={tag.id} name={tag.name} />
                  </div>
                ))
              : null}
          </div>
        </div>
        <Button classname={s.myButton}>View Offer</Button>
      </div>
    </div>
  )
}
