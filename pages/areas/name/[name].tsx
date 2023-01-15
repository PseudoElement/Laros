import { NextPage } from 'next'
import { getDestinationByName } from 'shared/api/routes/destinations'
import { DestinationInfoPage, DestinationInfoPageProps } from 'pages/DestinationInfoPage/DestinationInfoPage'

const Areas: NextPage<DestinationInfoPageProps> = ({ destination }) => <DestinationInfoPage destination={destination} />

export async function getServerSideProps(context: any) {
    const { name } = context.query

    const { data } = await getDestinationByName(name)

    //@ts-ignore
    const destination = data.data
    return { props: { destination } }
}

export default Areas
