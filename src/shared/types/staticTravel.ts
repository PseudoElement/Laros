import { StaticImageData } from 'next/image'

export interface StaticTravelItem {
  id: number
  overview: Overview[]
  highlighted: Highlighted[]
}

export interface Highlighted {
  title: string
  text: string
  link: string
  images: string[] | StaticImageData[]
}
export interface Overview {
  id: number
  preview: string | StaticImageData
  video?: string
}
