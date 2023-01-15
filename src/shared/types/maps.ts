import { StaticImageData } from 'next/image'

export interface Location {
  id: number
  link: string
  cardTitle: string
  map?: any
  cardText: string
  image?: string | StaticImageData | HTMLImageElement
}

export interface Locations {
  Greece: Location[]
}
