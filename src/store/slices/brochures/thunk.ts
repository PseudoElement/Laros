import { createAsyncThunk } from '@reduxjs/toolkit'
import { DefaultPaginationParams } from 'shared/types/api'
import { Brochure, DownloadBrochureForm } from 'shared/types/brochures'
import {
  getBrochures,
  sendDownloadBrochuresForm,
} from 'shared/api/routes/brochures'

export const getBrochuresThunk = createAsyncThunk<Brochure[]>(
  'brochures/getBrochures',
  async payload => {
    const response = await getBrochures()
    if (response.status === 200 && response.data.data.length) {
      const brochures: Brochure[] = response.data.data
      return brochures
    }
    return []
  }
)

export const sendDownloadBrochureThunk = createAsyncThunk<
  unknown,
  DownloadBrochureForm
>('brochures/downloadBrochures', async form => {
  const response = await sendDownloadBrochuresForm(form)
  if (response.status === 200) {
    return response.data.data
  }
})
