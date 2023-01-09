import Axios from 'axios'

export * from './endpoints'

export const URL = `https://developer.laros.ch/api/`

export const api = Axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
