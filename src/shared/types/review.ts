import { StaticImageData } from "next/image"

export type Review = {
    readonly id: number
    name: string
    tripname: string
    avatar: StaticImageData | string
    comment: string
}