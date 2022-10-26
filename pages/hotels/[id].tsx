import { NextPage } from 'next'

import {HotelPage} from "pages/HotelPage/HotelPage";

import {HotelMock} from '../../src/shared/mocks/hotel'

const Hotel: NextPage = () => <HotelPage {...HotelMock}/>

export default Hotel
