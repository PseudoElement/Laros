import { Meta } from '.'

export interface Room {
  readonly id: number
  destination_name?: string
  title?: string
  hotel_name?: string
  capacity?: number
  room_name?: string
  season_price?: number
  description?: string // TODO check API
  change_price?: string // TODO check API
  image: string
  price: number
}

export type HotelFilterParams = {
  destination: string // '1,2,3'
  capacity: number
  rating: number
  tags: string // '1,2,3'
  price_lt: string
  price_gt: number
  ordering: keyof Hotel
  category: string
  accommodations: string // '1,2,3'
  facilities: string // '1,2,3'
  date: string
}
export type Hotel = {
  readonly id: number
  max_capacity: number
  min_price: string
  destination_name: string
  category_name: string
  images: string[]
  rooms: string
  tags: HotelTag[]
  facilities: Facility[]
  accommodations: []
  name: string
  description: string
  is_active: boolean
  opinion: string
  address: string | null
  location: string
  rating: number
  tripadvisor_id: number | null
  link: string
  period: string
  destination: number
  category: number
}

export type RoomFilterParams = {
  hotel: number
}
export interface Facility extends Meta {
  image: string
}

export type HotelTag = Meta
