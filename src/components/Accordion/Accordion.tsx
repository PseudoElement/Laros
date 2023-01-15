import { FC, ReactNode, useState } from 'react'
import cn from 'classnames'

import s from './Accordion.module.scss'

interface AccordionProps {
  title: string
  content: ReactNode
  index: number
  classname?: string
}

export const Accordion: FC<AccordionProps> = ({
  title,
  content,
  classname,
  index,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleSetActiveIndex = (index: number) => {
    index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
  }

  const accordion = cn(s.accordion, classname)
  const buttonClass = cn(s.button, {
    [s.minus]: index === activeIndex,
  })

  return (
    <div className={accordion}>
      <div
        className={s.accordionTab}
        onClick={() => handleSetActiveIndex(index)}
      >
        <div className={s.title}>{title}</div>
        <div className={buttonClass}>{!(activeIndex === index) && '+'}</div>
      </div>

      {activeIndex === index && <div className={s.content}>{content}</div>}
    </div>
  )
}
