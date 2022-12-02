import { Option } from 'shared/types'

export const titleOptions: Option[] = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' },
  { label: 'Ms', value: 'ms' },
]
export const genderOptions: Option[] = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
]
export const booleanOptions: Option[] = [
  { label: 'Yes', value: 'true' },
  { label: 'No', value: 'false' },
]
export const MIN_DATE = new Date(1900, 0, 1)
