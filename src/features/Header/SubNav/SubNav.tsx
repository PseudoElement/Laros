import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslate } from 'shared/hooks/useTranslate'

import s from './SubNav.module.scss'

const subNavItems = [
  { name: 'navigation.subNav.btn1', to: '/destinations/areas/17' },
  { name: 'navigation.subNav.btn2', to: '/travel_planner' },
  { name: 'navigation.subNav.btn3', to: '/destinations/hotels/17' },
  { name: 'navigation.subNav.btn4', to: '/special_offers' },
  { name: 'navigation.subNav.btn5', to: '/blogs' },
]
interface SubNavProps {
  className?: string
}
export const SubNav: FC<SubNavProps> = ({ className }) => {
  const { pathname, push } = useRouter()
  const t = useTranslate()
  const navWrapper = cn(s.subNavWrapper, className)

  return (
    <div className={s.subnav}>
      <div className={navWrapper}>
        {subNavItems.map(item => (
          <div
            onClick={() => push(`/${item.to}`)}
            key={item.to}
            className={cn(s.item, { [s.active]: pathname === item.to })}
          >
            <Link href={item.to}>
              <a>{t(item.name)}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
