import { StaticImageData } from 'next/image'

export type tag = string

export interface TripFilterParams {
  destination: string
  travel_types: number
  price_lt: number
  price_gt: number
  ordering: string // TODO enum
}
export interface TripDestination {
  readonly id: number
  images: string[] // '/media/destination/img/xxx.png'
  duration: number
  trip: number // id
  destination: number // id
  hotel: number // id
}
export interface Trip {
  readonly id: number
  images: string[]
  price: number
  destinations: TripDestination[]
  name: string
  is_bookable: boolean
  is_active: boolean
  island_hopping_fee: boolean
  description: string
  route: string // TODO check
  transports: unknown[]
  travel_types: unknown[]
}
export interface TripItem {
  readonly id: number
  image: string | StaticImageData
  name: string
  from: string
  period: string
  duration: string
  startPoint: string
  tags: tag[]
}
