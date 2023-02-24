import { FC } from 'react'
import cls from 'classnames'

import { HighlightedItem } from './HighlightedItem'

import { Highlighted as HighlightedType } from 'shared/types/staticTravel'

import s from './Highlighted.module.scss'

export const Highlighted: FC<HighlightedType> = ({ images, title, text }) => {
  return (
    <div className={cls(s.wrapper)}>
      <div className={s.items}>
        <HighlightedItem title={title} text={text} images={images} />
      </div>
    </div>
  )
}
