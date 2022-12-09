import { createAsyncThunk } from '@reduxjs/toolkit'
import uniq from 'lodash/uniq'
import { sendFlightRequestForm } from 'shared/api/routes/requests'
import { FlightRequestFormType } from 'shared/types/requestForm'

export const sendFlightRequestThunk = createAsyncThunk<
  unknown,
  FlightRequestFormType
>('requests/flight', async data => {
  const form = {
    dest_from: data.departFrom.value,
    dest_to: data.arrivalTo.value,
    departure_date: new Date(data.earliestDeparture).toLocaleDateString(
      'en-CA'
    ),
    return_date: new Date(data.latestReturn).toLocaleDateString('en-CA'),
    flight_class: data.class,
    adults: data.adults,
    children: data.children,
    email: data.email,
    comment: data.comment,
    travellers: data.travellers.map(traveller => {
      const address = () => {
        if (traveller.address) {
          return uniq([
            traveller.address,
            traveller.address1,
            traveller.address2,
          ])
        }
        return [
          `${traveller.country} ${traveller.city} ${traveller.address1} ${traveller.address2}`,
        ]
      }

      return {
        name: traveller.name,
        nationality: Number(traveller.nationality.value),
        gender: traveller.gender,
        dob: new Date(traveller.birth).toLocaleDateString('en-CA'),
        addresses: address(),
      }
    }),
  }

  const response = await sendFlightRequestForm(form)

  if (response.status === 200) {
    return response.data.data
  }
})
