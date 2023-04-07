import { Transport } from './../types/transport'
import { Option } from 'shared/types'
import { Destination } from 'shared/types/destinations'

export const destinationToOption = (destinations: Destination[]): Option[] => {
  return destinations.map(dest => {
    return { value: dest.id.toString(), label: dest.airport ?? dest.name }
  })
}

export const destinationToOptionToFirstDest = (
  flights: Transport[]
): Option[] => {
  return flights.map(flight => ({
    value: flight.from_dest.toString(),
    label: flight.from_dest_name,
  }))
}
export const destinationToOptionFromLastDest = (
  flights: Transport[]
): Option[] => {
  return flights.map(flight => ({
    value: flight.to_dest.toString(),
    label: flight.to_dest_name,
  }))
}
