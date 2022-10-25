import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react'
import useHover from 'shared/hooks/useHover'

import cn from 'classnames'
import s from './ToolTip.module.scss'

interface ToolTipRpops {
  placement?: 'left' | 'right' | 'top' | 'bottom'
  children: ReactNode
  title: ReactNode
  arrow?: boolean
  className?: { className?: string; styles?: CSSProperties }
}

const setContainerPosition = ({
  placement,
}: Pick<ToolTipRpops, 'placement'>) => {
  let classnames

  switch (placement) {
    case 'right':
      classnames = s.rightContainer
      break
    case 'left':
      classnames = s.leftContainer
      break
    case 'top':
      classnames = s.topContainer
      break
    case 'bottom':
      classnames = s.bottomContainer
      break

    default:
      classnames = ''
  }

  return classnames
}

const setPointerPosition = ({ placement }: Pick<ToolTipRpops, 'placement'>) => {
  let classnames

  switch (placement) {
    case 'right':
      classnames = s.rightPointer
      break
    case 'left':
      classnames = s.leftPointer
      break
    case 'top':
      classnames = s.topPointer
      break
    case 'bottom':
      classnames = s.bottomPointer
      break

    default:
      classnames = ''
  }

  return classnames
}

const ToolTip: FC<ToolTipRpops> = ({
  placement = 'right',
  children,
  title,
  className,
  arrow = false,
}) => {
  const { onMouseEnter, onMouseLeave, isHover } = useHover()
  const [classNames, setClassNames] = useState({
    container: '',
    pointer: '',
  })

  useEffect(() => {
    const pointer = setPointerPosition({ placement })
    const container = setContainerPosition({ placement })

    setClassNames({ container, pointer })
  }, [placement])

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={s.container}
    >
      {isHover && (
        <div
          className={cn(
            classNames.container,
            s.tooltipContainer,
            className?.className
          )}
          style={className?.styles}
        >
          {arrow && <div className={cn(classNames.pointer, s.pointer)} />}
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

export default ToolTip
