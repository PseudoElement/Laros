import { StaticImageData } from 'next/image'

export type tag = string

export interface TripItem {
  image: string | StaticImageData
  name: string
  from: string
  period: string
  duration: string
  startPoint: string
  tags: tag[]
}
