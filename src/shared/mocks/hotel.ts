import { HotelGallery, HotelPageProps } from '../types/hotelPage'
import { HotelsCard } from '../types/hotelsCard'

import img from '../../../public/assets/images/hotelIntroImg.jpg'

import room1 from '../../../public/assets/images/hotelRooms/Rectangle 96.png'
import room2 from '../../../public/assets/images/hotelRooms/Rectangle 96 (1).png'
import room3 from '../../../public/assets/images/hotelRooms/Rectangle 96 (2).png'
import room4 from '../../../public/assets/images/hotelRooms/Rectangle 96 (3).png'
import room5 from '../../../public/assets/images/hotelRooms/Rectangle 96 (4).png'

import hotel from '../../../public/assets/images/area-images/cart__hotel-one.jpg'

import gallery1 from '../../../public/assets/images/hotelPageGallery/Frame1.png'
import gallery2 from '../../../public/assets/images/hotelPageGallery/Frame2.png'
import gallery3 from '../../../public/assets/images/hotelPageGallery/Frame3.png'

import imgMap from '../../../public/assets/images/hotelLocationMap.png'

export const HotelMock: HotelPageProps = {
  id: 1,
  name: 'Grecotel Astir Egnatia Alexandroupolis',
  rating: 4,
  address: 'Egnatia Park, Alexandroupoli 681 00, Greece',
  description:
    'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
  images: img.src,
  location: imgMap.src,
  max_capacity: '',
  is_active: true,
  opinion: '',
  tripadvisor_id: 1,
  destination: 2,
  facilitiesAndAmenities: [
    { id: 1, facility: 'Spa' },
    { id: 2, facility: 'Poolside bar' },
    { id: 3, facility: 'Car parking' },
    { id: 4, facility: 'Swimming pool/ Jacuzzi' },
    { id: 5, facility: 'Semi open & outdoor restaurant' },
  ],
  tags: [
    { id: 1, name: 'White tower of Thessaloniki' },
    { id: 2, name: 'Archaeological Museum of Thessaloniki' },
    { id: 3, name: 'Arch of Galerius' },
    { id: 4, name: 'Church of St. Demetrios' },
    { id: 5, name: 'Arch of Galerius' },
    { id: 6, name: 'Arch of Galerius' },
    { id: 7, name: 'Arch of Galerius' },
  ],
}

export const hotelRooms = [
  {
    id: 1,
    image: room1.src,
    title: 'Single room',
    info: '25 CHF / Night Pro 1 Person',
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
  },
  {
    id: 2,
    image: room2.src,
    title: 'Twin room',
    info: '25 CHF / Night Pro 1 Person',
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
  },
  {
    id: 3,
    image: room3.src,
    title: 'Double room',
    info: '25 CHF / Night Pro 1 Person',
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
  },
  {
    id: 4,
    image: room4.src,
    title: 'Triple room',
    info: '25 CHF / Night Pro 1 Person',
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
  },
  {
    id: 5,
    image: room5.src,
    title: 'Family room',
    info: '25 CHF / Night Pro 1 Person',
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
  },
]

export const otherHotels: HotelsCard[] = [
  {
    id: 1,
    image: hotel.src,
    rating: 3,
    address: 'Hotel • Leof. Dimokratias 422, Alexandroupoli ',
    name: 'Sea lovers',
    fromPrice: 42,
    period: 'Summer, 2022',
    tags: [
      { id: 1, name: 'Beach view', isSelected: false },
      { id: 2, name: 'Sea lovers', isSelected: true },
    ],
  },
  {
    id: 2,
    image: hotel.src,
    rating: 4,
    address: 'Hotel • Leof. Dimokratias 422, Alexandroupoli ',
    name: 'Ramada Plaza by Wyndham Thraki',
    fromPrice: 42,
    period: 'Summer, 2022',
    tags: [
      { id: 1, name: 'Beach view', isSelected: false },
      { id: 2, name: 'Sea lovers', isSelected: true },
    ],
  },
  {
    id: 3,
    image: hotel.src,
    rating: 4,
    address: 'Hotel • Leof. Dimokratias 422, Alexandroupoli ',
    name: 'Avenue Luxury Apartments - Deluxe Studio',
    fromPrice: 42,
    period: 'Summer, 2022',
    tags: [
      { id: 1, name: 'Beach view', isSelected: false },
      { id: 2, name: 'Sea lovers', isSelected: true },
    ],
  },
  {
    id: 4,
    image: hotel.src,
    rating: 4,
    address: 'Hotel • Leof. Dimokratias 422, Alexandroupoli ',
    name: 'Sea lovers',
    fromPrice: 42,
    period: 'Summer, 2022',
    tags: [
      { id: 1, name: 'Beach view', isSelected: false },
      { id: 2, name: 'Sea lovers', isSelected: true },
    ],
  },
  {
    id: 5,
    image: hotel.src,
    rating: 4,
    address: 'Hotel • Leof. Dimokratias 422, Alexandroupoli ',
    name: 'Ramada Plaza by Wyndham Thraki',
    fromPrice: 42,
    period: 'Summer, 2022',
    tags: [
      { id: 1, name: 'Beach view', isSelected: false },
      { id: 2, name: 'Sea lovers', isSelected: true },
    ],
  },
  {
    id: 6,
    image: hotel.src,
    rating: 4,
    address: 'Hotel • Leof. Dimokratias 422, Alexandroupoli ',
    name: 'Avenue Luxury Apartments - Deluxe Studio',
    fromPrice: 42,
    period: 'Summer, 2022',
    tags: [
      { id: 1, name: 'Beach view', isSelected: false },
      { id: 2, name: 'Sea lovers', isSelected: true },
    ],
  },
]

export const gallery: HotelGallery[] = [
  { id: 1, link: '/*', image: gallery1.src, description: 'Id augue sed' },
  {
    id: 2,
    link: '/*',
    image: gallery2.src,
    description: 'Facilisi consequat accumsan',
  },
  { id: 3, link: '/*', image: gallery3.src, description: 'Ut volutpat nibh' },
  { id: 4, link: '/*', image: gallery3.src, description: 'Ut volutpat nibh' },
  { id: 5, link: '/*', image: gallery1.src, description: 'Id augue sed' },
  {
    id: 6,
    link: '/*',
    image: gallery2.src,
    description: 'Facilisi consequat accumsan',
  },
]
