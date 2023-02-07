import { AxiosPromise } from 'axios'
import { ContactForm } from 'shared/types/contact'
import { api } from '..'
import { endpoints } from '../endpoints'
import { OrderPayload } from 'shared/types/order'

export const sendContactForm = (form: ContactForm): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.contactForm, form)
}

export const sendContactWithOrderForm = (
  form: ContactForm,
  order: OrderPayload
): AxiosPromise<any> => {
  // TODO
  return api.post(endpoints.contactWithOrder, { ...form, ...order })
}
