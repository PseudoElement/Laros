import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { Footer, Header, AboutLayout } from 'features'

import { useCollapsedHeader } from 'shared/hooks/useCollapsedHeader'
import { getAboutTabIndex } from 'shared/helpers/layout'

import s from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()
  const aboutPage = pathname.includes('/about')
  const isCollapsed = useCollapsedHeader()
  const containerClass = cn(s.container, {
    [s.collapsed]: isCollapsed,
  })

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={containerClass}>
        <div className={s.content}>
          {aboutPage ? (
            <AboutLayout tab={getAboutTabIndex(pathname)}>
              {children}
            </AboutLayout>
          ) : (
            children
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
