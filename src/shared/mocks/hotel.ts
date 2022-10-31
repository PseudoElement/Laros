import { HotelGallery, HotelPageProps } from '../types/hotelPage'

import img from '../../../public/assets/images/hotelIntroImg.jpg'

import room1 from '../../../public/assets/images/hotelRooms/Rectangle 96.png'
import room2 from '../../../public/assets/images/hotelRooms/Rectangle 96 (1).png'
import room3 from '../../../public/assets/images/hotelRooms/Rectangle 96 (2).png'
import room4 from '../../../public/assets/images/hotelRooms/Rectangle 96 (3).png'
import room5 from '../../../public/assets/images/hotelRooms/Rectangle 96 (4).png'

import gallery1 from '../../../public/assets/images/hotelPageGallery/Frame1.png'
import gallery2 from '../../../public/assets/images/hotelPageGallery/Frame2.png'
import gallery3 from '../../../public/assets/images/hotelPageGallery/Frame3.png'

import { Hotel, Room } from '../types/hotel'

export const HotelMock: Hotel = {
  id: 1,
  name: 'Grecotel Astir Egnatia Alexandroupolis',
  rating: 4,
  address: 'Egnatia Park, Alexandroupoli 681 00, Greece',
  description:
    'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
  images: [img.src, img.src, img.src, img.src, img.src, img.src],
  location: '',
  max_capacity: 0,
  is_active: true,
  opinion: '',
  tripadvisor_id: 1,
  destination: 2,
  link: '',
  period: '',
  tags: [
    { id: 1, name: 'White tower of Thessaloniki', isSelected: false },
    { id: 2, name: 'Archaeological Museum of Thessaloniki', isSelected: false },
    { id: 3, name: 'Arch of Galerius', isSelected: false },
    { id: 4, name: 'Church of St. Demetrios', isSelected: false },
    { id: 5, name: 'Arch of Galerius', isSelected: false },
    { id: 6, name: 'Arch of Galerius', isSelected: false },
    { id: 7, name: 'Arch of Galerius', isSelected: false },
  ],
}
export const facilitiesAndAmenities = [
  { id: 1, facility: 'Spa' },
  { id: 2, facility: 'Poolside bar' },
  { id: 3, facility: 'Car parking' },
  { id: 4, facility: 'Swimming pool/ Jacuzzi' },
  { id: 5, facility: 'Semi open & outdoor restaurant' },
]

export const hotelRoomsMock: Room[] = [
  {
    id: 1,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'single',
    season_price: 100,
  },
  {
    id: 2,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'double',
    season_price: 100,
  },
  {
    id: 3,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'triple',
    season_price: 100,
  },
  {
    id: 4,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'quadriple',
    season_price: 100,
  },
  {
    id: 5,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'single',
    season_price: 100,
  },
  {
    id: 6,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'double',
    season_price: 100,
  },
  {
    id: 7,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'triple',
    season_price: 100,
  },
  {
    id: 8,
    image: room1.src,
    description:
      'Arcu vitae ultricies egestas velit gravida. Vel ornare bibendum cum mattis ut placerat.',
    capacity: 1,
    change_price: '',
    hotel_name: 'Radisson Blu',
    destination_name: 'Rio',
    price: 100,
    title: '',
    room_name: 'quadriple',
    season_price: 100,
  },
]

export const otherHotels: Hotel[] = [
  {
    id: 1,
    name: 'Grecotel Astir Egnatia Alexandroupolis',
    rating: 4,
    address: 'Egnatia Park, Alexandroupoli 681 00, Greece',
    description:
      'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
    images: [img.src, img.src, img.src, img.src, img.src, img.src],
    location: '',
    max_capacity: 0,
    is_active: true,
    opinion: '',
    tripadvisor_id: 1,
    destination: 2,
    link: '',
    period: '',
    tags: [
      { id: 1, name: 'White tower of Thessaloniki', isSelected: false },
      {
        id: 2,
        name: 'Archaeological Museum of Thessaloniki',
        isSelected: false,
      },
      { id: 3, name: 'Arch of Galerius', isSelected: false },
      { id: 4, name: 'Church of St. Demetrios', isSelected: false },
      { id: 5, name: 'Arch of Galerius', isSelected: false },
      { id: 6, name: 'Arch of Galerius', isSelected: false },
      { id: 7, name: 'Arch of Galerius', isSelected: false },
    ],
  },
  {
    id: 1,
    name: 'Grecotel Astir Egnatia Alexandroupolis',
    rating: 4,
    address: 'Egnatia Park, Alexandroupoli 681 00, Greece',
    description:
      'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
    images: [img.src, img.src, img.src, img.src, img.src, img.src],
    location: '',
    max_capacity: 0,
    is_active: true,
    opinion: '',
    tripadvisor_id: 1,
    destination: 2,
    link: '',
    period: '',
    tags: [
      { id: 1, name: 'White tower of Thessaloniki', isSelected: false },
      {
        id: 2,
        name: 'Archaeological Museum of Thessaloniki',
        isSelected: false,
      },
      { id: 3, name: 'Arch of Galerius', isSelected: false },
      { id: 4, name: 'Church of St. Demetrios', isSelected: false },
      { id: 5, name: 'Arch of Galerius', isSelected: false },
      { id: 6, name: 'Arch of Galerius', isSelected: false },
      { id: 7, name: 'Arch of Galerius', isSelected: false },
    ],
  },
  {
    id: 1,
    name: 'Grecotel Astir Egnatia Alexandroupolis',
    rating: 4,
    address: 'Egnatia Park, Alexandroupoli 681 00, Greece',
    description:
      'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
    images: [img.src, img.src, img.src, img.src, img.src, img.src],
    location: '',
    max_capacity: 0,
    is_active: true,
    opinion: '',
    tripadvisor_id: 1,
    destination: 2,
    link: '',
    period: '',
    tags: [
      { id: 1, name: 'White tower of Thessaloniki', isSelected: false },
      {
        id: 2,
        name: 'Archaeological Museum of Thessaloniki',
        isSelected: false,
      },
      { id: 3, name: 'Arch of Galerius', isSelected: false },
      { id: 4, name: 'Church of St. Demetrios', isSelected: false },
      { id: 5, name: 'Arch of Galerius', isSelected: false },
      { id: 6, name: 'Arch of Galerius', isSelected: false },
      { id: 7, name: 'Arch of Galerius', isSelected: false },
    ],
  },
  {
    id: 1,
    name: 'Grecotel Astir Egnatia Alexandroupolis',
    rating: 4,
    address: 'Egnatia Park, Alexandroupoli 681 00, Greece',
    description:
      'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
    images: [img.src, img.src, img.src, img.src, img.src, img.src],
    location: '',
    max_capacity: 0,
    is_active: true,
    opinion: '',
    tripadvisor_id: 1,
    destination: 2,
    link: '',
    period: '',
    tags: [
      { id: 1, name: 'White tower of Thessaloniki', isSelected: false },
      {
        id: 2,
        name: 'Archaeological Museum of Thessaloniki',
        isSelected: false,
      },
      { id: 3, name: 'Arch of Galerius', isSelected: false },
      { id: 4, name: 'Church of St. Demetrios', isSelected: false },
      { id: 5, name: 'Arch of Galerius', isSelected: false },
      { id: 6, name: 'Arch of Galerius', isSelected: false },
      { id: 7, name: 'Arch of Galerius', isSelected: false },
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
