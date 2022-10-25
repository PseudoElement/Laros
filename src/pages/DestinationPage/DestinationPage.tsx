import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

import { DestinationLayout } from 'features/DestinationLayout'
import Greece from 'features/DestinationMaps/Greece/Greece'
import Cyrpus from 'features/DestinationMaps/Cyrpus/Cyrpus'

export const DestinationPage: FC = () => {
  const dispatch = useAppDispatch()
  const { query } = useRouter()
  const { destinations, currentDestination } = useAppSelector(
    state => state.destinations
  )

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [dispatch])

  return (
    <DestinationLayout
      currentDestination={Number(query.id)}
      destinations={destinations}
    >
      {/*<Greece />*/}
      <Cyrpus />
    </DestinationLayout>
  )
}
