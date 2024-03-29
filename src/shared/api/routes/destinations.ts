import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { Destination } from 'shared/types/destinations'
import { Transport } from 'shared/types/transport'
import { api } from '..'
import { endpoints } from '../endpoints'
import { TransferNumericTypes } from 'shared/types/transport'

export const getDestinations = (
  params?: any
): AxiosPromise<AxiosPaginatedResponse<Destination>> => {
  return api.get(endpoints.destinations.get, { params })
}

export const getDestination = (id: number): AxiosPromise<Destination> => {
  return api.get(endpoints.destinations.id(id))
}
export const getDestinationByName = (
  name: string
): AxiosPromise<Destination> => {
  return api.get(endpoints.destinations.oneByName(name))
}

export const getAirportDestinations = (): AxiosPromise<
  AxiosPaginatedResponse<Destination>
> => {
  return api.get(endpoints.destinations.get, { params: { airport: true } }) // TODO more to true
}

export const getNearDestinations = (
  destination: number
): AxiosPromise<AxiosPaginatedResponse<Destination>> => {
  return api.get(endpoints.destinations.near(destination))
}

export const getTransports = (
  destination_from: number,
  destination_to: number
): AxiosPromise<AxiosPaginatedResponse<Transport>> => {
  // TOOD move to separate file
  return api.get(endpoints.transport.all, {
    params: { from_dest: destination_from, to_dest: destination_to },
  })
}
export const getTransportToFirstDest = (
  destination_to: number,
  type: TransferNumericTypes = TransferNumericTypes.FLIGHT
): AxiosPromise<AxiosPaginatedResponse<Transport>> => {
  return api.get(endpoints.transport.all, {
    params: { to_dest: destination_to, type: type },
  })
}
export const getTransportFromLastDest = (
  destination_from: number,
  type: TransferNumericTypes = TransferNumericTypes.FLIGHT
): AxiosPromise<AxiosPaginatedResponse<Transport>> => {
  return api.get(endpoints.transport.all, {
    params: { from_dest: destination_from, type: type },
  })
}
