import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './SubNav.module.scss'

const subNavItems = [
  { name: 'Destination', to: '/destinations/areas/17' },
  { name: 'Trip planner', to: '/travel_planner' },
  { name: 'Hotels', to: '/destinations/hotels/17' },
  { name: 'Special offers', to: '/special_offers' },
  { name: 'Inspiration', to: '/blogs' },
]
export const SubNav: FC = () => {
  const { pathname, push } = useRouter()

  return (
    <div className={s.subnav}>
      {subNavItems.map(item => (
        <div
          onClick={() => push(`/${item.to}`)}
          key={item.to}
          className={cn(s.item, { [s.active]: pathname === item.to })}
        >
          <Link href={item.to}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
}
