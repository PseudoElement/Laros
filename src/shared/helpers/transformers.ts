import { Option } from 'shared/types'

export const provideOptionsWithIcon = (
  options: Option[],
  icon: string
): Required<Option[]> => {
  return options.map(option => {
    return { ...option, icon }
  })
}

export const getTripDays = (
  start: number,
  duration: number
): string | `${number}-${number}` => {
  if (duration === 1) {
    return start.toString()
  } else return `${start}-${start + duration - 1}`
}
