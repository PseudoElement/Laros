import { useEffect, useState } from 'react'

import { getHotels } from 'shared/api/routes/hotels'
import { Hotel } from 'shared/types/hotel'
import { HotelCard } from '../HotelCard'
import Sorting from './Sorting/Sorting'

import s from './DestinationHotels.module.scss'

const DestinationHotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([])

  const getHotelsFunction = async () => {
    const { data } = await getHotels({})

    setHotels(data.data)
  }

  useEffect(() => {
    getHotelsFunction()
  }, [])

  return (
    <div className={s.container}>
      <h3 className={s.title}>Sort accomodations by</h3>
      <Sorting />
      <div className={s.hotels}>
        {hotels.map(hotel => (
          <HotelCard
            type={'Type (Hotel/hostel ect)'}
            fromPrice={hotel?.max_capacity!}
            key={hotel.id}
            {...hotel}
          />
        ))}
      </div>
    </div>
  )
}

export default DestinationHotels
