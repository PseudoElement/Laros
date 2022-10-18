import { useRef, useState } from 'react'
import Calendar from 'react-calendar'

import { PencilIcon, CalendarIcon } from 'components/icons'

import { FC } from 'react'
import s from './InputCalendar.module.scss'
import cn from 'classnames'
import 'react-calendar/dist/Calendar.css'

import dateFormatter from 'shared/helpers/dateFormatter'
import { useOnClickOutside } from 'usehooks-ts'

interface InputCalendarProps {
  label: string
  required?: boolean
  onChange?: (value: Date) => void
  classname?: string
}

export const InputCalendar: FC<InputCalendarProps> = ({
  label,
  required = false,
  onChange,
  classname,
}) => {
  const [date, setDate] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    setShowCalendar(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  const handleChange = (e: Date): void => {
    onChange?.(e)
    setDate(e)
  }
  return (
    <div className={cn(s.inputCalendar, classname)}>
      {showCalendar && (
        <div ref={ref}>
          <Calendar onChange={handleChange} value={date} />
        </div>
      )}
      {!showCalendar && (
        <div className={s.gridWrapper}>
          <div
            className={s.calendarIcon}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <CalendarIcon />
          </div>

          <div className={s.label}>{`${label}${required ? '*' : ''}`}</div>

          <div className={s.textDate}>{dateFormatter(date)}</div>

          <span
            className={s.pencilIcon}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <PencilIcon />
          </span>
        </div>
      )}
    </div>
  )
}
