import { createAsyncThunk } from '@reduxjs/toolkit'
import { DefaultPaginationParams } from 'shared/types/api'
import { Brochure } from 'shared/types/brochures'
import { getBrochures } from 'shared/api/routes/brochures'

export const getBrochuresThunk = createAsyncThunk<Brochure[]>(
  'traders/getTradersThunk',
  async payload => {
    const response = await getBrochures()
    if (response.status === 200 && response.data.data.length) {
      const brochures: Brochure[] = response.data.data
      return brochures
    }
    return []
  }
)
