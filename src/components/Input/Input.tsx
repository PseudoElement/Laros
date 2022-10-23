import { FC, ReactNode } from 'react'
import { InputCalendar } from 'components/InputCalendar'

import { PencilIcon } from 'components/icons'

import s from './Input.module.scss'
import MaskedInput from 'react-text-mask' // TODO add types
import { NUMBER_REG_EXP } from 'shared/constants/regExp'
import cn from 'classnames'
import { Counter } from './Counter'

interface InputProps {
  label: string
  value?: string | number
  type?: 'text' | 'number' | 'phone' | 'email' | 'password' | 'date'
  required?: boolean
  placeholder?: string
  id: string
  onChange: (value: string | number | Date) => void
  classname?: string
  shorten?: boolean
  withCounter?: boolean
}
export const Input: FC<InputProps> = ({
  label,
  value = '',
  type = 'text',
  required = false,
  id,
  onChange,
  placeholder = '',
  classname = '',
  shorten,
  withCounter
}) => {
  const getInput = (type: InputProps['type']): ReactNode => {
    switch (type) {
      case 'phone':
        return (
          <MaskedInput
            mask={NUMBER_REG_EXP}
            guide={true}
            showMask={false}
            className={s.field}
            placeholder={placeholder}
            id={id}
            onChange={e => onChange(e.target.value)}
            value={value}
          />
        )
      case 'email':
        return (
          <input
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            className={s.field}
            type={type}
          />
        )
      case 'number':
        return (
          <>
            <input
              placeholder={placeholder}
              value={value}
              onChange={e => onChange(e.target.value)}
              className={s.field}
              type={type}
            />
            {withCounter && <Counter value={Number(value)} onChange={onChange} />}
          </>
        )

      default:
        return (
          <input
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            className={s.field}
            type={type}
          />
        )
    }
  }

  const CalendarMarkout = (
    <InputCalendar
      label={label}
      onChange={onChange}
      classname={s.field}
      required={required}
    />
  )

  const InputMarkout = (
    <div
      className={cn(
        s.input,
        { [s.shorten]: shorten, [s.numberInput]: type === 'number' },
        classname
      )}
    >
      {getInput(type)}
      {type !== 'number' && (
        <span className={s.icon}>
          <PencilIcon />
        </span>
      )}
    </div>
  )
  return type !== 'date' ? InputMarkout : CalendarMarkout
}
