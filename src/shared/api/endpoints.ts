export const endpoints = {
  brochures: {
    get: '/brochure/',
    download: '/brochure/download/multiple/',
    send: '/brochure/delivery/',
  },
  contactForm: '/contact/request/',
  contactWithOrder: '/contact/order/',
  voucherForm: '/voucher/create/',
  destinations: {
    get: '/destination/?size=300', // rename as in hotels TODO
    id: (id: number) => `/destination/${id}`,
    oneByName: (name: string) => `/destination/retrieve/${name}`,
    near: (id: number) => `/destination/same-parent/${id}`,
  },
  trips: {
    get: '/trip/',
    categories: '/travel_type/',
    duration: '/trip/min-max-duration/',
    id: (id: number) => `/trip/${id}/`,
    oneByName: (name: string) => `/trip/retrieve/${name}/`,
    similar: (id: number) => `/trip/similar/${id}`,
    near: (id: number) => `/trip/${id}/near/destinations`,
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
    oneByName: (name: string) => `/hotel/retrieve/${name}`,
    similar: (id: number) => `/hotel/similar/${id}`,
    near: (id: number) => `/hotel/reachable/${id}`,
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
    apply: (id: number) => `/vacancy/${id}/apply/`,
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
  requests: {
    flight: '/order/flight/request/',
    package: '/order/package/request/',
  },
  airport: '/airport/',
  transport: {
    all: '/transport/',
    one: (id: number) => `/transport/${id}`,
    route: '/transport/route/',
  },
  cars: {
    all: '/rent_car/',
  },
  country: {
    all: '/country/',
  },
  blogs: {
    all: '/post/',
    one: (id: number) => `/post/${id}`,
  },
}
