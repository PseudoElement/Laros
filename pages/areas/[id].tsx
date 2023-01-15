import { NextPage } from 'next'

import { DestinationInfoPage, DestinationInfoPageProps } from 'pages/DestinationInfoPage/DestinationInfoPage'
import { getDestination } from 'shared/api/routes/destinations'

const Area: NextPage<DestinationInfoPageProps> = ({ destination }) => <DestinationInfoPage destination={destination} />

export async function getServerSideProps(context: any) {
    const { id } = context.query
    const destinationId = Number(id)

    const { data } = await getDestination(destinationId)

    //@ts-ignore
    const destination = data.data
    return { props: { destination } }
}

export default Area
