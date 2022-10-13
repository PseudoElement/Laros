import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import { Brochure, DownloadBrochureForm } from 'shared/types/brochures'
import { api } from '..'
import { endpoints } from '../endpoints'

export const getBrochures = (): AxiosPromise<
  AxiosPaginatedResponse<Brochure>
> => {
  return api.get(endpoints.brochures.get)
}

export const sendDownloadBrochuresForm = (
  form: DownloadBrochureForm
): AxiosPromise<any> => {
  return api.post(endpoints.brochures.download, form)
}

export const sendSendBrochuresForm = (): AxiosPromise<any> => {
  return api.post(endpoints.brochures.send)
}
