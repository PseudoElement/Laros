import { CheckBox } from 'components/CheckboxGroup'
import { Option } from 'shared/types'

export const titleOptions: Option[] = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' },
  { label: 'Ms', value: 'ms' },
]
export const genderOptions: Option[] = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
]
export const booleanOptions: Option[] = [
  { label: 'Yes', value: 'true' },
  { label: 'No', value: 'false' },
]

export const classOptions: Option[] = [
  { label: 'Econom', value: 'Econom' },
  { label: 'Business', value: 'Business' },
  { label: 'First', value: 'First' },
]

export const transferOptions: Option[] = [
  { label: 'Private transfer', value: 'private' },
  { label: 'Bus Transfer', value: 'bus' },
]

export const citiesOptions: Option[] = [
  { label: 'Moscow', value: 'Moscow' },
  { label: 'New York', value: 'New York' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Istanbul', value: 'Istanbul' },
]

export const hotelCategory: Option[] = [
  { label: '*', value: '1' },
  { label: '**', value: '2' },
  { label: '***', value: '3' },
  { label: '****', value: '4' },
  { label: '*****', value: '5' },
]

export const boardTypes: CheckBox[] = [
  { label: 'All inclusive', value: 'all', status: false },
  { label: 'Full board', value: 'full', status: false },
  { label: 'Half board', value: 'half', status: false },
  { label: 'Bed & Breakfast', value: 'bnb', status: false },
]
export const REQUEST_FORMS = {
  name: '',
  nationality: 'not chosen',
  gender: 'Male',
  birth: '',
  address: '',
  address1: '',
  address2: '',
}

export const MIN_DATE = new Date(1900, 0, 1)
