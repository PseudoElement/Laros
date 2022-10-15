import { AxiosPromise } from 'axios'
import { AxiosPaginatedResponse } from 'shared/types/api'
import {
  Brochure,
  DownloadBrochureForm,
  SendBrochureForm,
} from 'shared/types/brochures'
import { ContactForm } from 'shared/types/contact'
import { api } from '..'
import { endpoints } from '../endpoints'

export const sendContactForm = (form: ContactForm): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.contactForm, form)
}
