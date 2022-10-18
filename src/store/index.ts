import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import brochuresSlice from './slices/brochures/brochures'
import contactFormSlice from './slices/contactForm/contactForm'
import destinationsSlice from './slices/destinations/destinations'

export const store = configureStore({
  reducer: {
    brochures: brochuresSlice,
    contact: contactFormSlice,
    destinations: destinationsSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
