import { FC } from 'react'
import { useRouter } from 'next/router'
import { getPath } from 'shared/helpers/getPath'
import { Destination } from 'shared/types/destinations'

import cn from 'classnames'
import s from './DestinationsList.module.scss'

interface DestinationItemProps {
  region: Destination & { icon: any }
}

const DestinationItem: FC<DestinationItemProps> = ({ region }) => {
  const { push, query, pathname } = useRouter()
  const route = getPath(pathname)

  const isActive = region.id === Number(query.id)

  return (
    <div
      onClick={() => push(`/destinations/${route}/${region.id}`)}
      className={cn(s.item, {
        [s.active]: isActive,
      })}
    >
      {region.icon && (
        <region.icon
          className={cn(s.icon, {
            [s.iconActive]: isActive,
          })}
        />
      )}
      <span className={s.title}>{region.name}</span>
    </div>
  )
}

export default DestinationItem
