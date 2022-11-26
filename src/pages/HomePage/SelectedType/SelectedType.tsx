import React, { FC } from 'react'
import s from './SelectedType.module.scss'
import { Slider } from 'components/Slider'
import { SliderItem } from './SliderItem'
import { TripCategory } from 'shared/types/trip'

interface SelectedType {
  travelTypes: TripCategory[]
}

export const SelectComponent: FC<SelectedType> = ({ travelTypes }) => {
  return (
    <div className={s.wrapper}>
      <Slider
        nextEl='moreNext'
        prevEl='morePrev'
        slidesPerView={5}
        withNavigation={true}
        withPagination={true}
        classname={s.sliderCuston}
      >
        {travelTypes.map((item, index) => (
          <SliderItem
            image={item.image}
            name={item.name}
            description={item.description}
            key={item.id}
          />
        ))}
      </Slider>
    </div>
  )
}
