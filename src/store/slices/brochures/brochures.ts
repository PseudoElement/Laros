import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { brochuresMock } from 'shared/mocks/brochures'
import { Brochure } from 'shared/types/brochures'
import { getBrochuresThunk } from './thunk'

export type BrochuresState = {
  brochures: Brochure[]
}

const initialState: BrochuresState = {
  brochures: [],
}

export const brochures = createSlice({
  name: 'brochures',
  initialState,
  reducers: {
    setBrochures: (
      state: BrochuresState,
      action: PayloadAction<Brochure[]>
    ) => {
      state.brochures = action.payload
    },
    toggleBrochure: (
      state: BrochuresState,
      action: PayloadAction<{ id: number; selected?: boolean }>
    ) => {
      const { id, selected } = action.payload
      state.brochures = state.brochures.map(brochure =>
        brochure.id === id
          ? {
              ...brochure,
              isSelected:
                selected !== undefined ? selected : !brochure.isSelected,
            }
          : brochure
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(getBrochuresThunk.fulfilled, (state, action) => {
      state.brochures = [...action.payload]
    })
    builder.addCase(getBrochuresThunk.rejected, () => {
      console.error('An error occured')
    })
  },
})

export const { setBrochures, toggleBrochure } = brochures.actions

export default brochures.reducer
