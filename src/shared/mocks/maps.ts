import { StaticImageData } from 'next/image'

import SubGr from '/public/assets/images/destinations/1.svg'
import SubGr2 from '/public/assets/images/destinations/2.svg'
import SubGr3 from '/public/assets/images/destinations/10.svg'
import SubGr4 from '/public/assets/images/destinations/8.svg'
import SubGr5 from '/public/assets/images/destinations/3.svg'
import SubGr7 from '/public/assets/images/destinations/9.svg'
import SubGr6 from '/public/assets/images/destinations/7.svg'
import SubGr8 from '/public/assets/images/destinations/6.svg'
import SubGr9 from '/public/assets/images/destinations/4.svg'
import SubGr10 from '/public/assets/images/destinations/5.svg'

export interface Map {
  id: number
  link: string
  cartTitle: string
  cartText: string
  image?: StaticImageData
}

interface TMap {
  Greece: Map[]
  Cyrpus: Map[]
  Macedonia: Map[]
}

export const Maps: TMap = {
  Greece: [
    {
      id: 1,
      link: 'lonian-islands',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr,
    },
    {
      id: 2,
      link: 'destinations/nibn-sagittis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr2,
    },
    {
      id: 3,
      link: 'destinations/macedonia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr3,
    },
    {
      id: 4,
      link: 'destinations/elti-molestie',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr4,
    },
    {
      id: 5,
      link: 'destinations/elti-molestie',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr5,
    },
    {
      id: 6,
      link: 'destinations/attica',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr6,
    },
    {
      id: 7,
      link: 'destinations/aegean',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr7,
    },
    {
      id: 8,
      link: 'destinations/cyclades',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr8,
    },
    {
      id: 9,
      link: 'destinations/crete',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr9,
    },
    {
      id: 10,
      link: 'destinations/macedonia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Central Cyrpus',
      image: SubGr10,
    },
  ],
  Cyrpus: [
    {
      id: 1,
      link: 'destinations/polis',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Polis',
    },
    {
      id: 2,
      link: 'destinations/goudi',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Goudi',
    },
    {
      id: 3,
      link: 'destinations/lysos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lysos',
    },
    {
      id: 4,
      link: 'destinations/miliou',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Miliou',
    },
    {
      id: 5,
      link: 'destinations/paphos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Paphos',
    },
    {
      id: 6,
      link: 'destinations/omodos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Omodos',
    },
    {
      id: 7,
      link: 'destinations/kakopetria',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kakopetria',
    },
    {
      id: 8,
      link: 'destinations/kalavassos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Kalavassos',
    },
    {
      id: 9,
      link: 'destinations/lemessos',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lemesso',
    },
    {
      id: 10,
      link: 'destinations/tochni',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Tochni',
    },
    {
      id: 11,
      link: 'destinations/chirokita',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Chirokita',
    },
    {
      id: 12,
      link: 'destinations/lefkosia',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Lefkosia',
    },
    {
      id: 13,
      link: 'destinations/larnaca',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Larnaca',
    },
    {
      id: 14,
      link: 'destinations/agia-napa',
      cartText:
        'At ultrices rhoncus sit vel viverra viverra. Arcu pellentesque gravida in orci, pretium nulla volutpat leo.',
      cartTitle: 'Agia Napa',
    },
  ],
  Macedonia: [],
}
