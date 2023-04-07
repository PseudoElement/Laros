import { vocabulary } from 'shared/constants/vocabulary'
import {
  FlightRequestFormType,
  PackageRequestFormType,
} from 'shared/types/requestForm'

export function convertErrorsForAlert(
  data: FlightRequestFormType | PackageRequestFormType
): string {
  return `${Object.keys(data)
    .map(key =>
      key === 'travellers' ? vocabulary['travellersData'] : vocabulary[key]
    )
    .join(', ')} sind Pflichtfelder.`
}
