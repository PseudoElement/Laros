import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Button, TruncatedText } from 'components'

import { useTranslate } from 'shared/hooks/useTranslate'
import { getTripDays } from 'shared/helpers/transformers'
import { withDomain } from 'shared/helpers/withDomain'

import { TripDestination } from 'shared/types/trip'
import { TRIP_PLAN_DESCRIPTION_SIZE } from 'shared/constants'

import bed from '/public/assets/images/bed_black.svg?url'

import s from './TripPlan.module.scss'

interface TripPlanProps {
  tripDestination: TripDestination[]
}

export const TripPlan: FC<TripPlanProps> = ({ tripDestination }) => {
  const { query, push } = useRouter()
  const { id } = query
  const t = useTranslate()
  const handlePush = () => {
    // push(`/trip_form/${id}`)
    push('/contact')
  }

  const filteredTripDestination = tripDestination?.filter(
    item => item.duration > 0
  )

  return (
    <div className={s.wrapper}>
      {filteredTripDestination.map((item, index) => {
        return (
          <div className={s.card} key={item.id}>
            <div className={s.cardWrap}>
              <div className={s.destinationName}>
                <div className={s.daysTitle}>
                  {t('pdfs.day')} {getTripDays(filteredTripDestination, index)}
                  <span>
                    /
                    {tripDestination.reduce((accumulator, currentValue) => {
                      return accumulator + currentValue.duration
                    }, 0) + 1}
                  </span>
                </div>
                {item.destination_name}
              </div>

              <TruncatedText
                className={s.description}
                limit={TRIP_PLAN_DESCRIPTION_SIZE}
              >
                {item.description}
              </TruncatedText>

              <div className={s.hotelInfo}>
                <div className={s.bedImage}>
                  <Image src={bed} width={16} height={16} />
                </div>

                <div>
                  {t('travelPlannerTripPlan.overnight')} {item.hotel.lrweb}
                </div>
              </div>
            </div>

            <div className={s.image}>
              {item.images.length ? (
                <Image src={withDomain(item.images[1])} layout={'fill'} />
              ) : null}
            </div>
          </div>
        )
      })}

      <div className={s.button}>
        <Button onClick={handlePush}>
          {t('travelPlannerTripPlan.startTripButton')}
        </Button>
      </div>
    </div>
  )
}
