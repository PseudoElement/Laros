import { NextPage } from 'next'
import { TripPage, TripPageProps } from 'pages/TripPage'
import { getTripByName } from 'shared/api/routes/trips'

const Trip: NextPage<TripPageProps> = ({ trip }) => <TripPage trip={trip} />

export async function getServerSideProps(context: any) {
    const { name } = context.query
    const { data } = await getTripByName(name)
    //@ts-ignore
    return { props: { trip: data.data } }
}

export default Trip

