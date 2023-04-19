import React, { FC, useState } from 'react'
import s from './Styles.module.scss'
import cn from 'classnames'
import { PencilIcon } from 'components/icons'

interface InputDynamicLabelProps {
  label: string
  value?: string | number
  type?: 'text' | 'number' | 'phone' | 'email' | 'password'
  classname?: string
  id: string
  required?: boolean
  min?: number
  max?: number
  onChange: () => void
}

const InputDynamicLabel: FC<InputDynamicLabelProps> = ({
  label,
  type = 'text',
  value,
  classname,
  min,
  max,
  id,
  onChange,
  required,
}) => {
  const [isTouched, setIsTouched] = useState<boolean>(false)

  const onFocus = () => {
    setIsTouched(true)
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    !e.target.value && setIsTouched(false)
  }

  return (
    <div className={cn(s.wrapper)}>
      <label
        className={cn(s.label, { [s.touchedLabel]: isTouched })}
        htmlFor={id}
      >
        {`${label}${required ? '*' : ''}`}
      </label>
      <input
        className={cn(s.field)}
        type={type}
        min={min ?? undefined}
        max={max ?? undefined}
        value={value}
        onFocus={onFocus}
        onBlur={e => onBlur(e)}
        onChange={onChange}
      />
      <span className={s.icon}>
        <PencilIcon />
      </span>
    </div>
  )
}

export default InputDynamicLabel
