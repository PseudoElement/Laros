import { Review } from 'shared/types/review'
import comment_3_image_1 from '/public/assets/images/aboutPage/testimonials/comment_3_image_1.jpg'
import comment_3_image_2 from '/public/assets/images/aboutPage/testimonials/comment_3_image_2.jpg'
import comment_3_image_3 from '/public/assets/images/aboutPage/testimonials/comment_3_image_3.jpg'
import comment_3_image_4 from '/public/assets/images/aboutPage/testimonials/comment_3_image_4.jpg'
import comment_3_image_5 from '/public/assets/images/aboutPage/testimonials/comment_3_image_5.jpg'
import comment_3_image_6 from '/public/assets/images/aboutPage/testimonials/comment_3_image_6.jpg'
import comment_3_image_7 from '/public/assets/images/aboutPage/testimonials/comment_3_image_7.jpg'
import comment_7_image_1 from '/public/assets/images/aboutPage/testimonials/comment_7_image_1.jpg'

export const reviewsMock: Review[] = [
  {
    id: 1,
    avatar: '',
    name: 'testimonials.card_1_name',
    tripname: 'testimonials.card_1_tripName',
    text: 'testimonials.card_1_text',
    images: [],
  },
  {
    id: 2,
    avatar: '',
    name: 'testimonials.card_2_name',
    tripname: 'testimonials.card_2_tripName',
    text: 'testimonials.card_2_text',
    images: [],
  },
  {
    id: 3,
    avatar: '',
    name: 'testimonials.card_3_name',
    tripname: 'testimonials.card_3_tripName',
    text: 'testimonials.card_3_text',
    images: [],
  },
  {
    id: 4,
    avatar: '',
    name: 'testimonials.card_4_name',
    tripname: 'testimonials.card_4_tripName',
    text: 'testimonials.card_4_text',
    images: [
      comment_3_image_1.src,
      comment_3_image_2.src,
      comment_3_image_3.src,
      comment_3_image_4.src,
      comment_3_image_5.src,
      comment_3_image_6.src,
      comment_3_image_7.src,
    ],
  },
  {
    id: 5,
    avatar: '',
    name: 'testimonials.card_5_name',
    tripname: 'testimonials.card_5_tripName',
    text: 'testimonials.card_5_text',
    images: [],
  },{
    id: 6,
    avatar: '',
    name: 'testimonials.card_6_name',
    tripname: 'testimonials.card_6_tripName',
    text: 'testimonials.card_6_text',
    images: [],
  },{
    id: 7,
    avatar: '',
    name: 'testimonials.card_7_name',
    tripname: 'testimonials.card_7_tripName',
    text: 'testimonials.card_7_text',
    images: [comment_7_image_1.src],
  },
]
