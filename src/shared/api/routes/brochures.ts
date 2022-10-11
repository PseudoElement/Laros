import { AxiosPromise } from 'axios'
import {
  AxiosPaginatedResponse,
  DefaultPaginationParams,
} from 'shared/types/api'
import { Brochure } from 'shared/types/brochures'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getBrochures = (): AxiosPromise<
  AxiosPaginatedResponse<Brochure>
> => {
  return api.get(endpoints.brochures.get)
}
