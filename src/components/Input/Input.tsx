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
}
export const Input: FC<InputProps> = ({
  label,
  value = '',
  type = 'text',
  required = false,
  id,
  onChange,
  placeholder,
  classname,
  shorten,
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
            <Counter value={Number(value)} onChange={onChange} />
          </>
        )
      case 'date':
        return (
          <InputCalendar
            label={label}
            onChange={onChange}
            classname={s.field}
          />
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
  return (
    <div
      className={cn(
        s.input,
        { [s.shorten]: shorten, [s.numberInput]: type === 'number' },
        classname
      )}
    >
      <div className={s.label}>{`${type !== 'date' ? label : ''}${
        required ? '*' : ''
      }`}</div>
      {getInput(type)}
      {type !== 'number' && (
        <span className={s.icon}>
          <PencilIcon />
        </span>
      )}
    </div>
  )
}
