import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { withDomain } from 'shared/helpers/withDomain'

import s from './CategoryCard.module.scss'
import { StaticTravelMock } from '../../../shared/mocks/staticTravel'

interface CategoryCardProps {
  id: number
  name: string
  images: string[]
  description: string
  vertical?: boolean
}

export const CategoryCard: FC<CategoryCardProps> = ({
  id,
  name,
  description,
  images,
  vertical = false,
}) => {
  const travelPlannerInfo = StaticTravelMock.find(page => page.id === id)

  return (
    <Link
      href={vertical ? `travel_planner/${id}` : `static_travel_planner/${id}`}
    >
      <div
        className={cn(s.card, { [s.vertical]: vertical })}
        style={{
          backgroundImage: `url(${
            images.length && vertical
              ? withDomain(images[0])
              : travelPlannerInfo?.images[0]
          })`,
        }}
      >
        <div className={s.content}>
          <div className={s.title}>{name}</div>

          <div className={s.container}>
            <div className={s.name}>{name}</div>

            <div
              className={s.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
