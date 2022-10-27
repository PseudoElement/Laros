import { Tag } from './tag'

export interface Room {
  readonly id: number
  destination_name?: string
  title?: string
  hotel_name?: string
  capacity?: string
  room_name?: string
  season_price?: string
  description?: string // TODO check API
  change_price?: string // TODO check API
  image?: string
  price: string
}
export type Hotel = {
  readonly id: number
  max_capacity?: number
  images: string[]
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
  tags: Tag[]
}
