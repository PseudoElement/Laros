import { NextPage } from 'next'
import { HotelPage } from '../../../src/pages/HotelPage'
import { HotelPageProps } from '../[id]'
import { getHotelByName } from '../../../src/shared/api/routes/hotels'

const Hotel: NextPage<HotelPageProps> = ({ hotel }) => {
  return <HotelPage hotelProp={hotel} />
}

export async function getServerSideProps(context: any) {
  const { name } = context.query
  try {
    const { data } = await getHotelByName(name)
    console.log('data :', data);
    //@ts-ignore

    return { props: { hotel: data?.data } }
  } catch (error) {
    console.log(error)
  }


}

export default Hotel
