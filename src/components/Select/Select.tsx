import { FC, useId } from 'react'
import Select, {
  components,
  ControlProps,
  DropdownIndicatorProps,
  OptionProps,
} from 'react-select'
import AsyncSelect from 'react-select/async'
import Image from 'next/image'
import cn from 'classnames'

import { Option } from 'shared/types'

import arrow from '/public/assets/images/arrow.svg?url'

import s from './Select.module.scss'

interface OptionsProps {
  options: Option[]
  onChange: (value: Option) => void
  value?: Option
  placeholder?: string
  classname?: string
  isMulti?: boolean
  hasArrow?: boolean
  onInputChange?: (value: string) => void
  async?: boolean
  withStar?: boolean
  controlIconSize?: number
  loadOptions?: any // TODO in future
}

interface SelectControlProps extends ControlProps {
  getValue: () => Option[]
}

interface SelectOptionProps extends OptionProps {
  data: Option
}

export const SelectComponent: FC<OptionsProps> = ({
  options,
  placeholder = 'Select...',
  classname,
  isMulti = false,
  hasArrow = true,
  value,
  async = false,
  loadOptions,
  onChange,
  onInputChange,
  withStar,
  controlIconSize = 25,
}) => {
  const DropdownIndicator: FC<DropdownIndicatorProps> = props =>
    hasArrow ? (
      <components.DropdownIndicator {...props}>
        <Image src={arrow} width={13} height={7} alt='arrow' />
      </components.DropdownIndicator>
    ) : null

  const Option: FC<SelectOptionProps> = props => {
    return (
      <components.Option {...props}>
        {props.data.icon?.length ? (
          <>
            {props.data.icon.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item}
                  width={15}
                  height={15}
                  alt='icon'
                />
              )
            })}
          </>
        ) : null}
        <span>{props.label}</span>
      </components.Option>
    )
  }

  const Control: FC<SelectControlProps> = props => {
    return (
      <components.Control {...props}>
        {props.getValue().map((item, index) => {
          return (
            <div className={s.iconWrap}>
              {item.icon
                ? item.icon.map((item, index) => (
                    <span key={index} className={s.icon}>
                      <Image
                        src={item}
                        width={controlIconSize}
                        height={controlIconSize}
                        alt='icon'
                      />
                    </span>
                  ))
                : null}
              {withStar && item.icon && (
                <span className={s.starText}>{item.icon.length} star</span>
              )}
            </div>
          )
        })}
        {props.children}
      </components.Control>
    )
  }

  const customStyles = {
    option: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      color: '#1B242D',
      backgroundColor: state.isFocused ? '#F2F5F8' : 'white',
      padding: '12px 16px',
      display: 'flex',
      borderRadius: '8px',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      ':active': {
        backgroundColor: '#F2F5F8',
      },
    }),
    dropdownIndicator: () => ({
      padding: '0 18px 3px 8px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (provided: any) => ({
      ...provided,
      margin: '4px 0',
      boxShadow: '0px 18px 18px rgba(0, 60, 118, 0.05)',
    }),
    control: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      height: '40px',
      borderColor: state.isFocused ? '#0ABAEE' : '#F2F5F8',
      backgroundColor: state.isFocused ? '#FFFFFF' : '#F2F5F8',
      boxShadow: 'none',
      caretColor: '#0ABAEE',
      cursor: 'pointer',
      ':hover': {
        borderColor: '#0ABAEE',
      },
    }),
  }

  const randomId = useId()

  return async ? (
    <AsyncSelect
      instanceId={randomId}
      styles={customStyles}
      options={options}
      value={value}
      defaultValue={value ?? options[0]}
      // @ts-ignore
      components={{ Option, DropdownIndicator, Control }}
      isMulti={isMulti}
      // @ts-ignore
      onChange={val => onChange(val)}
      className={cn(s.select, classname)}
      placeholder={placeholder}
      onInputChange={onInputChange}
      loadOptions={loadOptions}
    />
  ) : (
    <Select
      instanceId={randomId}
      styles={customStyles}
      options={options}
      value={value}
      defaultValue={value ?? options[0]}
      // @ts-ignore
      components={{ Option, DropdownIndicator, Control }}
      isMulti={isMulti}
      // @ts-ignore
      onChange={val => onChange(val)}
      className={cn(s.select, classname)}
      placeholder={placeholder}
      onInputChange={onInputChange}
    />
  )
}

// import { FC, useId } from 'react'
// import Select, {
//   components,
//   ControlProps,
//   DropdownIndicatorProps,
//   OptionProps,
// } from 'react-select'
// import AsyncSelect from 'react-select/async'
// import Image from 'next/image'
//
// import cn from 'classnames'
// import s from './Select.module.scss'
// import arrow from '../../../public/assets/images/arrow.svg?url'
// import { Option } from 'shared/types'
//
// interface OptionsProps {
//   options: Option[]
//   onChange: (value: Option) => void
//   value?: Option
//   placeholder?: string
//   classname?: string
//   isMulti?: boolean
//   hasArrow?: boolean
//   onInputChange?: (value: string) => void
//   async?: boolean
//   loadOptions?: any // TODO in future
// }
//
// export const SelectComponent: FC<OptionsProps> = ({
//   options,
//   placeholder = 'Select...',
//   classname,
//   isMulti = false,
//   hasArrow = true,
//   value,
//   async = false,
//   loadOptions,
//   onChange,
//   onInputChange,
// }) => {
//   const DropdownIndicator: FC<DropdownIndicatorProps> = props =>
//     hasArrow ? (
//       <components.DropdownIndicator {...props}>
//         <Image src={arrow} width={13} height={7} alt='arrow' />
//       </components.DropdownIndicator>
//     ) : null
//
//   const Option: FC<OptionProps> = props => (
//     <components.Option {...props}>
//       {options.map((item, i) =>
//         item.label === props.label && item.icon ? (
//           <Image key={i} src={item.icon} width={10} height={10} alt='icon' />
//         ) : null
//       )}
//       {props.label}
//     </components.Option>
//   )
//
//   const Control: FC<ControlProps> = props => (
//     <components.Control {...props}>
//       {options.map((item, i) =>
//         item.label === props.getValue().map((el: any) => el.label)[0] &&
//         item.icon ? (
//           <div className={s.control}>
//             <Image key={i} src={item.icon} width={30} height={30} alt='icon' />
//           </div>
//         ) : null
//       )}
//       {props.children}
//     </components.Control>
//   )
//
//   const customStyles = {
//     option: (provided: any, state: { isFocused: boolean }) => ({
//       ...provided,
//       color: '#1B242D',
//       backgroundColor: state.isFocused ? '#F2F5F8' : 'white',
//       padding: '12px 16px',
//       display: 'flex',
//       borderRadius: '8px',
//       alignItems: 'center',
//       gap: '10px',
//       cursor: 'pointer',
//       ':active': {
//         backgroundColor: '#F2F5F8',
//       },
//     }),
//     dropdownIndicator: () => ({
//       padding: '0 18px 3px 8px',
//     }),
//     indicatorSeparator: () => ({
//       display: 'none',
//     }),
//     menu: (provided: any) => ({
//       ...provided,
//       margin: '4px 0',
//       boxShadow: '0px 18px 18px rgba(0, 60, 118, 0.05)',
//     }),
//     control: (provided: any, state: { isFocused: boolean }) => ({
//       ...provided,
//       height: '40px',
//       borderColor: state.isFocused ? '#0ABAEE' : '#F2F5F8',
//       backgroundColor: state.isFocused ? '#FFFFFF' : '#F2F5F8',
//       boxShadow: 'none',
//       caretColor: '#0ABAEE',
//       cursor: 'pointer',
//       ':hover': {
//         borderColor: '#0ABAEE',
//       },
//     }),
//   }
//
//   const randomId = useId()
//
//   return async ? (
//     <AsyncSelect
//       instanceId={randomId}
//       styles={customStyles}
//       options={options}
//       value={value}
//       defaultValue={value ?? options[0]}
//       components={{ Option, DropdownIndicator, Control }}
//       isMulti={isMulti}
//       // @ts-ignore
//       onChange={val => onChange(val)}
//       className={cn(s.select, classname)}
//       placeholder={placeholder}
//       onInputChange={onInputChange}
//       loadOptions={loadOptions}
//     />
//   ) : (
//     <Select
//       instanceId={randomId}
//       styles={customStyles}
//       options={options}
//       value={value}
//       defaultValue={value ?? options[0]}
//       components={{ Option, DropdownIndicator, Control }}
//       isMulti={isMulti}
//       // @ts-ignore
//       onChange={val => onChange(val)}
//       className={cn(s.select, classname)}
//       placeholder={placeholder}
//       onInputChange={onInputChange}
//     />
//   )
// }
