import { TagProps } from '../../components/Tag/Tag'

export interface HotelPageProps {
  hotelName: string
  rating: number
  address: string
  description: string
  hotelImg: string
  hotelMap: string
  tags: TagProps[]
}
