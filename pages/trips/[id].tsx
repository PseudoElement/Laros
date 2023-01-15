import { NextPage } from 'next'
import { TripPage, TripPageProps } from '../../src/pages/TripPage'
import { getTrip } from 'shared/api/routes/trips'

const Trip: NextPage<TripPageProps> = ({ trip }) => <TripPage trip={trip} />

export async function getServerSideProps(context: any) {
    const { id } = context.query
    const tripId = Number(id)

    const { data } = await getTrip(tripId)

    //@ts-ignore
    const trip = data.data
    return { props: { trip } }
}

export default Trip
