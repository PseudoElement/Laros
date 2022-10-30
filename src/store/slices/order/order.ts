import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderForm } from 'shared/types/order'
import { sendOrderThunk } from './thunk'

export type ContactFormState = {
  form: OrderForm
}

const initialState: ContactFormState = {
  form: {} as OrderForm,
}

export const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateForm: (
      state: ContactFormState,
      action: PayloadAction<Partial<ContactFormState>>
    ) => {
      state.form = { ...state.form, ...action.payload }
    },
  },
  extraReducers: builder => {
    builder.addCase(sendOrderThunk.fulfilled, (state, action) => {
      //   state.loading = [...action.payload]
    })
    builder.addCase(sendOrderThunk.rejected, () => {
      console.error('An error occured')
    })
  },
})

export const { updateForm } = order.actions

export default order.reducer
