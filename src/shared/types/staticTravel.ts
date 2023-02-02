import { StaticImageData } from 'next/image'
import { TripCategory } from './trip'

export interface StaticTravelItem extends TripCategory {
  id: number
  highlighted?: Highlighted
  overview: Overview
}

export interface Highlighted {
  title: string
  text: string
  link: string
  images: string[]
}
export interface Overview {
  id: number
  images: string[]
  video?: string
}
