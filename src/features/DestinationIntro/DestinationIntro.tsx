import React, { FC, useState } from 'react'
import { truncate } from 'lodash'

import { Map } from 'components'
import { Tag } from 'components'

import { Destination } from 'shared/types/destinations'
import { TRUNCATED_ROOM_CARD_TEXT_SIZE } from 'shared/constants'

import s from './DestinationIntro.module.scss'

export const DestinationIntro: FC<Destination> = ({
  id,
  name,
  location,
  description,
  address,
  highlights,
  tips,
  parent,
  images,
  travel_types,
  is_island,
  is_road,
  is_port,
  is_airport,
  fee,
  is_active,
}) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true)

  return (
    <div className={s.destinationIntro}>
      <div className={s.destinationIntroLeft}>
        <div className={s.address}>{address}</div>
        <div className={s.name}>{name}</div>

        <div className={s.description}>
          {isTruncated
            ? truncate(description, { length: TRUNCATED_ROOM_CARD_TEXT_SIZE })
            : description}
        </div>

        {description && (
          <div
            className={s.seeMore}
            onClick={() => setIsTruncated(prev => !prev)}
          >
            See more
          </div>
        )}

        <div className={s.tagsTitle}>Highlights:</div>
        <div className={s.tagPanel}>
          {highlights?.map((item, index) => (
            <div key={index} className={s.tag}>
              <Tag name={item} id={index} />
            </div>
          ))}
        </div>
      </div>

      <div className={s.destinationIntroRight}>
        <Map location={location} />
      </div>
    </div>
  )
}
