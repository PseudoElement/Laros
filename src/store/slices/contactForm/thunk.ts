import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  sendContactForm,
  sendContactWithOrderForm,
} from 'shared/api/routes/contactForm'
import { ContactForm } from 'shared/types/contact'
import { OrderPayload } from 'shared/types/order'

export const sendContactFormThunk = createAsyncThunk<unknown, ContactForm>(
  'brochures/sendBrochures',
  async form => {
    const response = await sendContactForm(form)
    if (response.status === 200) {
      return response.data.data
    }
  }
)

export const sendContactOrderFormThunk = createAsyncThunk<
  unknown,
  { order: OrderPayload; form: ContactForm }
>('brochures/sendBrochures', async ({ form, order }) => {
  const response = await sendContactWithOrderForm(form, order)
  if (response.status === 200) {
    return response.data.data
  }
})
