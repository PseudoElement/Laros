export const endpoints = {
  brochures: {
    get: '/brochure/',
    download: '/brochure/download/multiple/',
    send: '/brochure/delivery/',
  },
  contactForm: '/order/create/',
  destinations: {
    get: '/destination/',
    id: (id: number) => `/destination/${id}`,
  },
  trips: {
    get: '/trip/',
    categories: '/trip/travel_type/',
  },
}
