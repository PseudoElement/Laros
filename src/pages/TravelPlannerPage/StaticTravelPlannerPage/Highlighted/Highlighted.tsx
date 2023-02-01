import { FC } from 'react'
import s from './Highlighted.module.scss'
import cls from 'classnames'
import { HighlightedItem } from './HighlightedItem'
import { Highlighted as HighlightedType } from 'shared/types/staticTravel'

interface HighlightedProps {
  highlighted: HighlightedType[]
}

export const Highlighted: FC<HighlightedProps> = ({ highlighted }) => {
  const route = 1
  return (
    <div className={cls(s.wrapper)}>
      <h3 className={s.title}>Massgeschneiderte Individualreisen weltweit</h3>

      <div className={s.items}>
        {highlighted.map((item, idx) => (
          <HighlightedItem
            key={idx}
            // @ts-ignore
            link={`/destinations/${route}/${item.id}`}
            title={item.title}
            text={item.text}
            images={item.images}
          />
        ))}
      </div>
    </div>
  )
}
