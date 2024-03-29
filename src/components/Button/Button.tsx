import { FC, MouseEvent, ReactNode } from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'reset' | 'submit'
  variant?: 'primary' | 'secondary' | 'outline'
  classname?: string
  onClick?: () => void
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  classname,
  onClick,
  disabled,
}) => {
  const buttonClass = cn(s.button, s[variant], classname)
  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClick?.()
  }
  return (
    <button
      className={buttonClass}
      type={type}
      onClick={e => handleButton(e)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
