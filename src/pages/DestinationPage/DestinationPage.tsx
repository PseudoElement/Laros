import { DestinationLayout } from 'features/DestinationLayout'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getDestinationsThunk } from 'store/slices/destinations/thunk'

export const DestinationPage: FC = () => {
    const dispatch = useAppDispatch()
    const { query } = useRouter();
    const { destinations, currentDestination } = useAppSelector((state) => state.destinations)

    useEffect(() => {
        dispatch(getDestinationsThunk())
    }, [dispatch])

    return (
        <DestinationLayout currentDestination={Number(query.id)} destinations={destinations}>
            Hi
        </DestinationLayout>
    )
}