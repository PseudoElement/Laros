import img from '../../../public/assets/images/hotelIntroImg.jpg'
import imgMap from '../../../public/assets/images/hotelLocationMap.png'
import { HotelPageProps } from '../types/hotelPage'

export const HotelMock: HotelPageProps = {
  hotelName: 'Grecotel Astir Egnatia Alexandroupolis',
  rating: 4,
  address: 'Egnatia Park, Alexandroupoli 681 00, Greece',
  description:
    'Malesuada nunc consequat porttitor vitae. Risus vitae ipsum varius eleifend ullamcorper tellus, dolor ipsum suspendisse. Maecenas et urna a, nibh dolor id elit a cras. Etiam lobortis habitant tempor est eleifend vulputate egestas. Lacus mollis vel, eu, congue tellus rhoncus quis adipiscing. Aenean fringilla vulputate maecenas amet, mattis id odio ultrices imperdiet. Et, viverra mauris, cursus molestie. Hendrerit quisque pulvinar montes, duis tincidunt. Sagittis euismod sed dui ac ut eget massa nibh. Massa, vitae dolor nulla ante orci. Sodales neque lacus, magna nisl blandit pellentesque.',
  hotelImg: img.src,
  hotelMap: imgMap.src,
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
