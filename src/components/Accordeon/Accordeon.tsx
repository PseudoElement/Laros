import { useState } from 'react'
import cn from 'classnames'

import s from './Accordeon.module.scss'
import { faqItem } from 'shared/types/faq'
import { AccordeonItem } from 'components/AccordeonItem'

interface AccordeonProps {
  items: faqItem[]
  every?: boolean
  activeIndex?: number
  classname?: string
  classnameItem?: string
}

export const Accordeon: React.FC<AccordeonProps> = ({
  items,
  every = false,
  activeIndex = 0,
  classname,
  classnameItem,
}) => {
  const [currentIndexes, setActiveIndex] = useState<number[]>([activeIndex])
  const accordeonClass = cn(s.accordeonItemButton, classname)

  const handleSetIndex = (index: number) => {
    const pos = currentIndexes.findIndex(val => val === index)
    if (every) {
      !(pos > -1)
        ? setActiveIndex(arr => [...arr, index])
        : setActiveIndex(currentIndexes.filter(val => val !== index))
    } else {
      setActiveIndex([index])
    }
  }

  return (
    <div className={accordeonClass}>
      {items.map(({ title, content }, i) => (
        <AccordeonItem
          key={title}
          title={title}
          content={content}
          activeIndexes={currentIndexes}
          index={i}
          setActiveIndex={handleSetIndex}
          classname={classnameItem}
        />
      ))}
    </div>
  )
}
