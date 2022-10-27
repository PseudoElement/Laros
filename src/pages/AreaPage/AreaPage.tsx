import { useEffect, useState } from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { DestinationLayout } from 'features/DestinationLayout'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import { Maps, Map } from 'shared/mocks/Maps/maps'

const getMap = (id: number) => {
  const GreeceMap = Maps.Greece.find(item => item.id == id)
  const CyrpusMap = Maps.Cyrpus.find(item => item.id == id)
  const MacedoniaMap = Maps.Macedonia.find(item => item.id == id)

  return GreeceMap || CyrpusMap || MacedoniaMap
}

export const AreaPage = () => {
  const dispatch = useAppDispatch()
  const { query } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )
  const [currentMap, setCurrentMap] = useState<Map | null>(null)

  useEffect(() => {
    const currentMap = getMap(query.id as unknown as number)

    setCurrentMap(currentMap ? currentMap : null)

    dispatch(getDestinationsThunk())
  }, [query.id])

  return (
    <DestinationLayout
      currentDestination={Number(query.id)}
      destinations={destinations}
    >
      {currentMap && <Image alt='' src={currentMap.image!} />}
    </DestinationLayout>
  )
}
