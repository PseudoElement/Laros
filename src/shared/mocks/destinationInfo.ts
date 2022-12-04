import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'

import imageBg from '/public/assets/images/destinationsInfoBg.png'
// @ts-ignore
export const destinationInfo: Destination = {
  id: 2,
  name: 'Chalkida',
  activities: [],
  festivals: [],
  images: [imageBg.src, imageBg.src, imageBg.src, imageBg.src],
  overview:
    'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
  fee: 10.0,
  description:
    'Thessaloniki is a Greek port city on the Thermaic Gulf of the Aegean Sea. Evidence of Roman, Byzantine and Ottoman history remains, especially around Ano Poli, the upper town. The ruins of Roman Emperor Galerius’ 4th-century palace include the Rotunda that has been both a church and a mosque Much of the city center was destroyed in the Great Fire of 1917. The rebuilt 20th-century city has a modern European layout.',
  highlights: [
    'White tower of Thessaloniki',
    'Archaeological Museum of Thessaloniki',
    'Arch of Galerius',
    'Church of St. Demetrios',
    'Arch of Galerius',
    'Arch of Galerius',
    'Arch of Galerius',
  ],
  address: 'Central Macedonia, Greece',
  is_active: false,
  is_port: false,
  is_road: true,
  is_airport: false,
  is_island: false,
  parent: 14,
  location: 'SRID=4326;POINT (23.800629 37.813474)',
  tips: '',
  travel_types: [1],
}

export const tripsMock: Trip[] = [
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'Beach view',
      },
      {
        id: 2,
        name: 'Sea lovers',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: 'Summer, 2022',
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: 'Summer, 2022',
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '10',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: null,
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '10',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: null,
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '10',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: null,
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '10',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: null,
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '10',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: null,
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '10',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: null,
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
  {
    id: 1,
    images: [],
    price: 510.0,
    offer_discount: '10',
    offer_date_end: '',
    offer_date_start: '',
    offer_percent: '20',
    destinations: [
      {
        id: 1,
        images: [
          '/media/destination/img/09-10-2022/Screenshot_from_2022_09_18_22_35_35.png',
        ],
        destination_name: 'pyrgi',
        hotel_name: 'Hilton',
        description: null,
        duration: 3,
        trip: 1,
        destination: 10,
        hotel: 3,
      },
      {
        id: 2,
        images: [],
        destination_name: 'Eretria',
        hotel_name: 'Stilton',
        description: '',
        duration: 4,
        trip: 1,
        destination: 4,
        hotel: 4,
      },
    ],
    duration: 7,
    offer_name: null,
    tags: [
      {
        id: 1,
        name: 'null1',
      },
      {
        id: 2,
        name: 'null2',
      },
    ],
    travel_types: [],
    transports: [],
    name: 'Greece Tour',
    is_active: true,
    island_hopping_fee: true,
    description: '',
    period: null,
    offer: null,
    route:
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-star+ecf0f1.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90818],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835181],[23.796691,37.834666],[23.788354,37.834461],[23.784018,37.833139],[23.779146,37.832808],[23.772717,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-lodging+2980b9.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-heliport+d35400.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003517],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961886],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908184],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"http://187.0.0.1:8000/static/map-icons/pin-l-airfield+e74c3c.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}',
  },
]
