import { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'

import { PencilIcon, CalendarIcon } from 'components/icons'

import { FC } from 'react'
import s from './InputCalendar.module.scss'
import cn from 'classnames'
import 'react-calendar/dist/Calendar.css'
import dateFormatter from 'shared/helpers/dateFormatter'

interface InputCalendarProps {
  label: string
  value: string | number
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
  required = false,
  id,
  onChange,
  placeholder,
  classname,
  shorten,
}) => {
  const [date, setDate] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowCalendar(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div className={cn(s.inputCalendar, { [s.shorten]: shorten }, classname)}>
      {showCalendar && (
        <div ref={ref}>
          <Calendar onChange={setDate} value={date} />
        </div>
      )}
      <div className={s.gridWrapper}>
        {!showCalendar && (
          <div className={s.calendarIcon}>
            <CalendarIcon />
          </div>
        )}
        {!showCalendar && (
          <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>
        )}
        {!showCalendar && (
          <div className={s.textDate}>{dateFormatter(date)}</div>
        )}
        {!showCalendar && (
          <span
            className={s.pencilIcon}
            onClick={() => setShowCalendar(!showCalendar)}
            onBlur={() => setShowCalendar(false)}
          >
            <PencilIcon />
          </span>
        )}
      </div>
    </div>
  )
}
