import cn from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

import s from './AccordeonItem.module.scss'

interface AccordeonItemProps {
  title: string
  content: string | ReactNode
  index: number
  activeIndexes: number[]
  setActiveIndex: (index: number) => void
  classname?: string
}

export const AccordeonItem: React.FC<AccordeonItemProps> = ({
  title,
  content,
  index,
  activeIndexes,
  setActiveIndex,
  classname,
}) => {
  const eq: boolean = !!(activeIndexes.findIndex(val => val === index) > -1)
  const buttonClass = cn(s.accordeonItemButton, { [s.minus]: eq })
  const accordeonItemWrapper = cn(s.accordeonItemWrapper, classname)
  return (
    <div className={accordeonItemWrapper}>
      <div className={s.accordeonItem} onClick={() => setActiveIndex(index)}>
        <div className={s.accordeonItemTitle}>{title}</div>
        <div className={buttonClass}>{!eq && '+'}</div>
      </div>

      {eq && <div className={s.accordeonItemContent}>{content}</div>}
    </div>
  )
}
