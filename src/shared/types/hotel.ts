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
export type Hotel = {}
