import { useRef, useState, FC, useEffect } from 'react'
import CalendarWrapper from 'react-calendar'
import cn from 'classnames'
import 'react-calendar/dist/Calendar.css'

import { InputCalendarLeft } from './CalendarLeft'
import { InputCalendarRight } from './CalendarRight'
import { InputCalendarTop } from './CalendarTop'
import { InputCalendarDouble } from './CalendarDouble'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { MIN_DATE } from 'shared/constants/form'

import s from './InputCalendar.module.scss'

export interface InputCalendarProps {
  label?: string
  required?: boolean
  onChange?: (value: Date | Date[]) => void
  value?: Date | null
  doubleValue?: Date[] | null
  classname?: string
  variant?: 'left' | 'right' | 'top' | 'double'
  showCalendar?: boolean
  setShowCalendar?: (showCalendar: boolean) => void
  handleIconClick?: () => void
  error?: boolean
  setError?: any
  setDate?: any
  isMulti?: boolean
  widIcon?: boolean
  // TODO temp changed to any as build errors
  // setError?: (value: boolean) => void
  // setDate?: (date: Date) => void
}

type InputCalendarPropsMain = Omit<
  InputCalendarProps,
  'showCalendar' | 'setShowCalendar'
>

export const InputCalendar: FC<InputCalendarPropsMain> = ({
  label,
  required = false,
  onChange,
  classname,
  variant,
  value,
  isMulti,
  widIcon = true,
}) => {
  const [date, setDate] = useState<Date | null>(value ?? new Date())
  const [error, setError] = useState<boolean>(false)
  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  const [doubleDate, setDoubleDate] = useState<Date[] | null>([
    new Date(),
    new Date(),
  ])
  const ref = useRef<HTMLDivElement>(null)

  const handleIconClick = (): void => {
    setShowCalendar(!showCalendar)
    setDate(null)
    setError(false)
  }

  const handleClickOutside = (): void => {
    setShowCalendar(false)
    if (error || value === undefined) setDate(date || new Date())
  }

  useClickOutside(ref, handleClickOutside)

  const handleChange = (e: Date): void => {
    onChange?.(e)
    setDate(e)

    if (isMulti && Array.isArray(e)) {
      setDoubleDate([...e])
      setShowCalendar(false)
    }

    !isMulti && setShowCalendar(false)
  }

  const CalendarDouble = (
    <InputCalendarDouble
      label={label}
      required={required}
      handleIconClick={handleIconClick}
      error={error}
      setError={setError}
      setDate={setDate}
      doubleValue={doubleDate}
    />
  )

  const CalendarLeft = (
    <div className={s.gridWrapper}>
      <InputCalendarLeft
        label={label}
        required={required}
        value={date}
        handleIconClick={handleIconClick}
        error={error}
        setError={setError}
        setDate={setDate}
        widIcon={widIcon}
      />
    </div>
  )

  const CalendarRight = (
    <InputCalendarRight
      label={label}
      required={required}
      value={date}
      handleIconClick={handleIconClick}
      error={error}
      setError={setError}
      setDate={setDate}
    />
  )

  const CalendarTop = (
    <InputCalendarTop
      label={label}
      required={required}
      value={date}
      handleIconClick={handleIconClick}
      error={error}
      setError={setError}
      setDate={setDate}
    />
  )

  const showInput = () => {
    switch (variant) {
      case 'right':
        return CalendarRight
      case 'top':
        return CalendarTop
      case 'double':
        return CalendarDouble
      default:
        return CalendarLeft
    }
  }

  return (
    <div className={cn(s.inputCalendar, classname)}>
      {showCalendar && (
        <div ref={ref}>
          <CalendarWrapper
            locale={'de'}
            className={cn(s.wrapper, classname)}
            onChange={handleChange}
            value={date}
            minDate={MIN_DATE}
            selectRange={isMulti}
          />
        </div>
      )}

      <div className={cn(s.gridWrapper, classname)}> {showInput()}</div>
    </div>
  )
}
