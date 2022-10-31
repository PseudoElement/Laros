import React, { FC } from 'react'
import Image from 'next/image'

import spa from '../../../../public/assets/images/spa.svg'
import bar from '../../../../public/assets/images/bar.svg'
import parking from '../../../../public/assets/images/parking.svg'
import pool from '../../../../public/assets/images/swimingPool.svg'
import restaurant from '../../../../public/assets/images/foodMenu.svg'

interface FacilityIcon {
  variant: number
}

export const FacilityIcon: FC<FacilityIcon> = ({ variant }) => {
  switch (variant) {
    case 1:
      return <Image src={spa} alt='' />
    case 2:
      return <Image src={bar} alt='' />
    case 3:
      return <Image src={parking} alt='' />
    case 4:
      return <Image src={pool} alt='' />
    case 5:
      return <Image src={restaurant} alt='' />
    default:
      return <Image src={spa} alt='' />
  }
}