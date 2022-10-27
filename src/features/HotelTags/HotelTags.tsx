import React, { FC } from 'react'

import { Tag, TagProps } from 'components/Tag/Tag'

import s from './HotelTags.module.scss'

export interface HotelTagsProps {
  tags: TagProps[]
  limit?: number
}

export const HotelTags: FC<HotelTagsProps> = ({ tags, limit = 5 }) => {
  return (
    <div className={s.HotelTags}>
      {tags.length ? (
        <>
          {tags.slice(0, limit).map(tag => (
            <Tag key={tag.id} {...tag} />
          ))}
          <span className={s.HotelTagsMoreTags}>+{tags.length - limit}</span>
        </>
      ) : null}
    </div>
  )
}
