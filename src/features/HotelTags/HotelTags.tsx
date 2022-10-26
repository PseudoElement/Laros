import React, { FC } from 'react'

import { Tag, TagProps } from 'components/Tag/Tag'
import { dropRight } from '../../shared/helpers/dropRight'
import s from './HotelTags.module.scss'

export interface HotelTagsProps {
  tags: TagProps[]
  limit?: number
}

export const HotelTags: FC<HotelTagsProps> = ({ tags, limit = 5 }) => {
  const limitTags = dropRight(tags, limit)

  return (
    <div className={s.HotelTags}>
      {limitTags.map(tag => (
        <Tag key={tag.id} {...tag} />
      ))}
      <span className={s.HotelTagsMoreTags}>
        +{tags.length - limitTags.length}
      </span>
    </div>
  )
}
