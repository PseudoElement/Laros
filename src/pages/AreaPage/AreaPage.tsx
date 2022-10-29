import { useEffect, useState } from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { DestinationLayout } from 'features/DestinationLayout'
import DestinationHotels from 'features/DestinationHotels/DestinationHotels'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import { getCurrentMap } from 'shared/helpers/getMap'

import { Map } from 'shared/types/maps'

export const AreaPage = () => {
  const dispatch = useAppDispatch()
  const { query } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )
  const [currentMap, setCurrentMap] = useState<Map | null>(null)

  useEffect(() => {
    const currentMap = getCurrentMap(Number(query.id))

    setCurrentMap(currentMap ? currentMap : null)

    dispatch(getDestinationsThunk())
  }, [query.id])

  return (
    <>
      <DestinationLayout
        currentDestination={Number(query.id)}
        destinations={destinations}
      >
        {currentMap && <Image alt='' src={currentMap.image!} />}
      </DestinationLayout>
      <DestinationHotels />
    </>
  )
}
