export const endpoints = {
  brochures: {
    get: '/brochure/',
    download: '/brochure/download/multiple/',
    send: '/brochure/delivery/',
  },
  contactForm: '/order/create/',
  destinations: {
    get: '/destination/', // rename as in hotels TODO
    id: (id: number) => `/destination/${id}`,
  },
  trips: {
    get: '/trip/',
    categories: '/trip/travel_type/',
    id: (id: number) => `/trip/${id}`,
    similar: (id: number) => `/trip/similar/${id}`,
  },
  order: '/order/create/',
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
    tags: {
      all: '/hotel_tag/',
      one: (id: number) => `/hotel_tag/${id}`,
    },
  },
  hotels: {
    get: '/hotel/',
    id: (id: number) => `/hotel/${id}`,
    similarId: (id: number) => `/hotel/similar/${id}`,
    nearId: (id: number) => `/hotel/near/${id}`,
  },

  hotels_tag: {
    get: '/hotel_tag/',
    id: (id: number) => `/hotel_tag/${id}`,
  },
}
