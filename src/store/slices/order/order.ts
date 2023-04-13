import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderForm, OrderTransport, OrderTraveller } from 'shared/types/order'
import { sendOrderThunk } from './thunk'
import { TransferValue } from 'shared/types/transport'

interface CarChangeInfo {
  transferCarNumber: null | number
  destinationIndex: null | number
}

export type OrderFormState = {
  form: OrderForm
  changedCarData: CarChangeInfo
}

const initialState: OrderFormState = {
  form: {
    date_start: new Date().toUTCString(),
    transports: [] as TransferValue[],
    rooms: [
      {
        adults: 2,
        children: 0,
      },
    ],
    travellers: [] as OrderTraveller[],
  } as OrderForm,
  changedCarData: {
    transferCarNumber: null,
    destinationIndex: null,
  },
}

export const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateForm: (
      state: OrderFormState,
      action: PayloadAction<Partial<OrderForm>>
    ) => {
      state.form = { ...state.form, ...action.payload }
    },
    changeTransferCarData: (
      state: OrderFormState,
      action: PayloadAction<CarChangeInfo>
    ) => {
      state.changedCarData = action.payload
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

export const { updateForm, changeTransferCarData } = order.actions

export default order.reducer
