import { Dispatch, FC, SetStateAction } from 'react'

import { PencilIcon } from 'components/icons'

import s from './Input.module.scss'
import MaskedInput from 'react-text-mask' // TODO add types
import { NUMBER_REG_EXP } from 'shared/constants/regExp'
import cn from 'classnames'
import { Counter } from 'components/Counter'
import { FieldValues, UseFormSetFocus } from 'react-hook-form'
import { ControllersState } from 'features'

interface InputProps {
  label: string
  value?: string | number
  type?: 'text' | 'number' | 'phone' | 'email' | 'password'
  required?: boolean
  placeholder?: string
  id?: string
  onChange: (value: string | number) => void
  classname?: string
  shorten?: boolean
  withCounter?: boolean
  min?: number
  max?: number
  name?: string
  setFocusedInputs?: (prev: any) => void
  focusedInputs?: ControllersState
}

export const Input: FC<InputProps> = ({
  setFocusedInputs,
  name,
  focusedInputs,
  label,
  value = '',
  type = 'text',
  required = false,
  id,
  onChange,
  placeholder = '',
  classname = '',
  shorten,
  withCounter,
  min,
  max,
}) => {
  const onFocus = () => {
    setFocusedInputs?.((prev: ControllersState) => ({ ...prev, [name!]: true }))
  }
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    !e.target.value &&
      setFocusedInputs?.((prev: ControllersState) => ({
        ...prev,
        [name!]: false,
      }))
  }

  switch (type) {
    case 'phone':
      return (
        <div className={cn(s.input, { [s.shorten]: shorten }, classname)}>
          {<div className={s.label}>{label}</div>}
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
          <span className={s.icon}>
            <PencilIcon />
          </span>
        </div>
      )
    case 'email':
      return (
        <div className={cn(s.input, { [s.shorten]: shorten }, classname)}>
          {/*@ts-ignore*/}
          <div className={cn(s.label, { [s.touched]: focusedInputs?.[name] })}>
            {label}
          </div>
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            className={s.field}
            type={type}
          />

          <span className={s.icon}>
            <PencilIcon />
          </span>
        </div>
      )
    case 'number':
      return (
        <div
          className={cn(
            s.input,
            s.numberInput,
            { [s.shorten]: shorten },
            classname
          )}
        >
          {<div className={s.label}>{label}</div>}
          <input
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            className={s.field}
            type={type}
            min={min}
            max={max}
          />
          {withCounter && (
            <div className={s.counter}>
              <Counter
                value={Number(value)}
                onChange={onChange}
                min={min}
                max={max}
              />
            </div>
          )}
          {!withCounter && (
            <span className={s.icon}>
              <PencilIcon />
            </span>
          )}
        </div>
      )
    default:
      return (
        <div className={cn(s.input, { [s.shorten]: shorten }, classname)}>
          {/*@ts-ignore*/}
          <div className={cn(s.label, { [s.touched]: focusedInputs?.[name] })}>
            {label}
          </div>

          <input
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
            onChange={e => {
              onChange(e.target.value)
              console.log('NAME', name)
            }}
            className={s.field}
            type={type}
          />
          <span className={s.icon}>
            <PencilIcon />
          </span>
        </div>
      )
  }
}
