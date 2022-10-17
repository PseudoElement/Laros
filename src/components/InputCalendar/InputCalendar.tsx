import { useState } from 'react'
import Calendar from 'react-calendar'

import { PencilIcon } from 'components/icons'
import { FC } from 'react'
import s from './InputCalendar.module.scss'
import cn from 'classnames'

interface InputCalendarProps {
  label: string
  value: string | number
  type?: 'date'
  required?: boolean
  placeholder?: string
  id: string
  onChange: (value: string | number) => void
  classname?: string
  shorten?: boolean
}
export const InputCalendar: FC<InputCalendarProps> = ({
  label,
  value,
  type = 'date',
  required = false,
  id,
  onChange,
  placeholder,
  classname,
  shorten,
}) => {
  const [date, setDate] = useState(new Date())
  return (
    <div className={cn(s.inputCalendar, { [s.shorten]: shorten }, classname)}>
      <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>
      <span>
        <Calendar onChange={setDate} value={date} />
      </span>
      <span>
        <span>Selected Date:</span> {date.toDateString()}
      </span>
      <span className={s.icon}>
        <PencilIcon />
      </span>
    </div>
  )
}
