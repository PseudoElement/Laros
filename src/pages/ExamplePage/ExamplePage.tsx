// @ts-nocheck
import React, { FC, useState } from 'react'

import { HotelCard, ContactForm, TripCard, ChangeLocationModal } from 'features'

import { CategoryCard } from 'pages/TravelPlannerPage/CategoryCard'
import {
  Map,
  Radio,
  Checkbox,
  InputCalendar,
  Gallery,
  Tags,
  Modal,
  ReactPlayer,
  Input,
  Slider,
} from 'components'

import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import { mockTags } from 'shared/mocks/tags'
import { destinationsMock } from 'shared/mocks/destinations'
import { tripCards } from 'shared/mocks/tripCards'
import { HotelMock } from 'shared/mocks/hotel'
import { tripsMock } from 'shared/mocks/destinationInfo'

import s from './example.module.scss'
import { galleryMock } from 'shared/mocks/gallery'
import Image from 'next/image'
import { ChangeHotelModal } from '../../features/ChangeHotelModal'

const gjson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [23.82335240986305, 37.97466393870391],
          [23.792187593783012, 37.87928330038466],
        ],
        type: 'LineString',
      },
    },
  ],
}

export const ExamplePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChangeCarOpen, setIsChangeCarOpen] = useState(false)
  const [input, setInput] = useState<any>()
  const [checkboxValue, setCheckboxValue] = useState('man')
  const [counter, setCounter] = useState<any | Date>('')
  const [counter1, setCounter1] = useState<any | Date>('')
  const [tags, setTags] = useState(mockTags)
  const tripCardData = tripCards[0]
  const [galleryIsOpen, setGalleryIsOpen] = useState<boolean>(false)
  const [galleryActiveIndex, setGalleryActiveIndex] = useState<number | null>(
    null
  )

  const [route, setRoute] = useState(
      '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"opacity":1,"iconUrl":"/static/map-icons/pin-s-marker+7f8c8d.png","iconSize":[35,90],"iconColor":"#ecf0f1","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.946275,37.941439]}},{"type":"Feature","properties":{"color":"#e74c3c","weight":"7","opacity":"0.8","dashArray":"10, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.945572,37.940144],[23.928831,37.916045],[23.900371,37.90812],[23.881537,37.889625],[23.866052,37.875421],[23.848474,37.864188],[23.832988,37.853614],[23.806202,37.834775],[23.800719,37.835121],[23.796691,37.834666],[23.788354,37.834461],[23.784012,37.833139],[23.779146,37.832808],[23.772711,37.834048],[23.763975,37.837849],[23.753459,37.846525],[23.752099,37.85235]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"/static/map-icons/pin-s-marker+7f8c8d.png","iconSize":[35,90],"iconColor":"#2980b9","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.746618,37.854053]}},{"type":"Feature","properties":{"color":"#2980b9","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.751832,37.854514],[23.751308,37.85881],[23.732056,37.876238],[23.719914,37.89749],[23.71824,37.908718],[23.688525,37.927538],[23.69564,37.936781],[23.696895,37.943713],[23.730796,37.969453]]}},{"type":"Feature","properties":{"opacity":1,"popupContent":"Helicopter tour","iconUrl":"/static/map-icons/pin-s-marker+7f8c8d.png","iconSize":[35,90],"iconColor":"#d35400","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.739837,37.972108]}},{"type":"Feature","properties":{"color":"#9b59b6","weight":"8","opacity":"0.8","dashArray":"15, 10, 1, 10","fillColor":null,"fillOpacity":0.2},"geometry":{"type":"LineString","coordinates":[[23.737792,37.968822],[23.760223,37.985041],[23.79245,38.002192],[23.825514,38.016372],[23.835977,38.024285],[23.867366,38.016042],[23.867366,38.003511],[23.8749,37.994276],[23.869459,37.982732],[23.887037,37.961286],[23.884526,37.940165],[23.893315,37.915075],[23.898571,37.908124],[23.924729,37.916461],[23.942307,37.933464]]}},{"type":"Feature","properties":{"opacity":1,"iconUrl":"/static/map-icons/pin-s-marker+7f8c8d.png","iconSize":[35,90],"iconColor":"#e74c3c","iconAnchor":[17.5,45],"popupAnchor":[0,-45]},"geometry":{"type":"Point","coordinates":[23.943321,37.932603]}}]}'  )
  const [e, setE] = useState('ssssssssss')

  const location = 'SRID=4326;POINT (23.800629 37.813474)'

  const ee = (ee: string) => {
    setE(ee)
  }

  return (
    <div
      style={{
        marginTop: '45px',
        margin: '45px',
        width: '100%',
        backgroundColor: '#FAFBFC',
      }}
    >
    </div>
  )
}
