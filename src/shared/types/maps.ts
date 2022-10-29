import { StaticImageData } from 'next/image'

export interface Map {
  id: number
  link: string
  cartTitle: string
  cartText: string
  image?: StaticImageData
}

export interface Maps {
  Greece: Map[]
  Cyrpus: Map[]
  Macedonia: Map[]
}
