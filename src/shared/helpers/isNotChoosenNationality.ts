import {
  FlightRequestFormType,
  PackageRequestFormType,
} from 'shared/types/requestForm'

export const isNotChoosenNationality = (
  data: FlightRequestFormType | PackageRequestFormType
) =>
  data.travellers.some(traveller =>
    Object.values(traveller.nationality).some(value => !value)
  )
