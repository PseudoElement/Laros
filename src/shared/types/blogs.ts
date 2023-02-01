import { StaticImageData } from 'next/image'

export type BlogType = {
  id: number
  title: string
  subTitle: string
  description: string
  image: string | StaticImageData
  read: number
}

export type BlogPayload = {
  id: number
  title: string
  image: string
  description: string
}

export type BlogsQueryParams = {
  page: number
  size: number
}
