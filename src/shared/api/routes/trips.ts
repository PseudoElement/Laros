import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { Trip, TripFilterParams } from 'shared/types/trip'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getTrips = (
  params: Partial<TripFilterParams>
): AxiosPromise<AxiosPaginatedResponse<Trip>> => {
  return api.get(endpoints.trips.get, { params })
}
