import { StaticImageData } from 'next/image'
import { Meta } from '.'
import { Hotel } from './hotel'
import { Destination } from './destinations'
import { Transfer, Transport } from './transport'

export interface Trip {
  readonly id: number
  images: string[]
  price: number
  price_chf: number
  price_per_person_chf: number
  destinations: TripDestination[]
  duration: string
  offer_name: string | null
  offer_discount: string | null
  offer_percent: string | null
  offer_date_start: string
  offer_date_end: string
  tags: Meta[]
  travel_types: string
  transports: TripTransport[]
  near_destinations: Destination[]
  name: string
  is_active: boolean
  is_early_booking: boolean
  island_hopping_fee: boolean
  dest_start: number
  description: string | null
  tips: string | null
  route?: string | null
  period: string | null
  offer: number | null
}

export interface TripTransport {
  from_dest_name: string
  id: number
  to_dest_name: string
  transport: number
  trip: number
  type_name: Transfer
}
export interface TripDestination {
  readonly id: number
  images: string[] // '/media/destination/img/xxx.png'
  destination_name: string
  hotel_name: string
  description: string | null
  duration: number
  trip: number // id
  destination_id: number // id
  hotel: Hotel
  rental?: number[] // car ids
  transfers?: Transport[]
}

export enum TripSort {
  AZ = 'name',
  ZA = '-name',
  COST_LOW = 'cost',
  COST_HIGH = '-cost',
  DURATION_SHORT = 'duration',
  DURATION_LONG = '-duration',
}

export interface TripFilterParams {
  destination: string
  duration: string
  travel_types: number
  price_lt: number
  tags: string
  price_gt: number
  ordering: TripSort
  offer: boolean
  page: number
}

export interface TripCategory extends Meta {
  description: string
  images: string[]
}

export interface TripItem {
  readonly id: number
  image: string | StaticImageData
  name: string
  from: string
  period: string
  duration: string
  startPoint: string
  tags: string[]
}

// export interface TripDuration {
//   min_duration: number
//   max_duration: number
// }

// TODO (fix after clarification)

export interface TripDuration {
  code: number
  data: { min_duration: number; max_duration: number }
  message: string
  status: string
}
