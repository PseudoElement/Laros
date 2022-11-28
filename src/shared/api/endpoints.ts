import { getAccommodations } from './routes/accommodation'

export const endpoints = {
  brochures: {
    get: '/brochure/',
    download: '/brochure/download/multiple/',
    send: '/brochure/delivery/',
  },
  contactForm: '/contact/request/',
  voucherForm: '/voucher/create/',
  destinations: {
    get: '/destination/', // rename as in hotels TODO
    id: (id: number) => `/destination/${id}`,
  },
  trips: {
    get: '/trip/',
    categories: '/travel_type/',
    duration: '/trip/min-max-duration/',
    id: (id: number) => `/trip/${id}`,
    similar: (id: number) => `/trip/similar/${id}`,
  },
  order: {
    create: '/order/create/',
    calculate: '/order/calculate/',
  },
  rooms: {
    all: '/room/',
    one: (id: number) => `/room/${id}`,
    tags: {
      all: '/room_tag/',
      one: (id: number) => `/room_tag/${id}`,
    },
  },
  hotels: {
    all: '/hotel/',
    one: (id: number) => `/hotel/${id}`,
    similar: (id: number) => `/hotel/similar/${id}`,
    near: (id: number) => `/hotel/near/${id}`,
    accomodations: '/accomodations/',
    categories: '/category/',
    tags: {
      all: '/hotel_tag/',
      one: (id: number) => `/hotel_tag/${id}`,
    },
  },
  contact: '/contact/request',
  vacancy: {
    all: '/vacancy/',
    one: (id: number) => `/vacancy/${id}`,
    apply: (id: number) => `/vacancy/${id}/apply`,
  },
  subscription: '/subscription/create',
  category: {
    all: '/category/',
    one: (id: number) => `/category/${id}`,
  },
  accommodations: {
    all: '/accommodation/',
    one: (id: number) => `/accommodation/${id}`,
  },
  transport: {
    all: '/transport/',
    one: (id: number) => `/transport/${id}`,
    route: '/transport/route/',
  },
}
