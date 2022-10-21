import { StaticImageData } from 'next/image'

export type Blogs = {
  id: number
  title: string
  subTitle: string
  description: string
  image: string | StaticImageData
}
