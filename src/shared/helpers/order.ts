import { OrderForm, OrderPayload, OrderTransport } from 'shared/types/order'
import { dateToServerFormat } from './dateFormatter'
import { countPeople } from './trip'
import { Transfer, TransferValue } from 'shared/types/transport'

export const transfersToAPI = (
  transfer: TransferValue
): OrderTransport | undefined => {
  if (!transfer || transfer.type === Transfer.CAR) {
    return
  }
  return {
    date: dateToServerFormat(new Date()),
    transport: transfer.value as number, // only car transfer can be null (rental)
    rental: transfer.value === null,
  }
}

export const prepareOrderFormToApi = (form: OrderForm): OrderPayload => {
  const finalTravellers = form.travellers.map(traveller => {
    // @ts-ignore
    const fullName = traveller.name?.split(' ')
    return {
      name: fullName?.[0],
      surname: fullName?.[1],
      title: traveller.title.toLowerCase(),
      dob: dateToServerFormat(traveller.dob),
      nationality: traveller.nationality.value,
    }
  })
  const ferryFlightTransfers: OrderTransport[] = form.transports
    .filter(tran => tran?.type !== Transfer.CAR)
    .map(transfer => ({
      transport: transfer!.value as number,
      date: dateToServerFormat(new Date()),
    }))
  const finalForm = {
    name: form.name,
    surname: form.surname,
    email: form.email,
    phone: form.phone,
    address: form.address,
    zip_code: form.zip_code,
    is_travel_agent: form.is_travel_agent,
    offer: form.offer,
    comment: form.comment,
    date_start: dateToServerFormat(form.date_start),
    dest_start: Number(form.dest_from?.value),
    dest_end: Number(form.dest_to?.value),
    destinations: form.destinations.map((destination, index) => {
      return {
        destination: destination.destination,
        hotel: destination.hotel?.id ?? null,
        duration: destination.duration,
        rooms:
          // @ts-ignore
          destination?.rooms?.map(room => ({
            ...form.rooms?.[0],
            room_id: room.id,
          })) ?? [],
        taxi:
          (form.transports[index + 1]?.type === Transfer.CAR &&
            !form.transports[index]?.value) ??
          false,
        // taxi: Boolean(
        //   form.transports[index + 1]?.type === Transfer.CAR &&
        //     form.transports[index]?.value
        // ),
        rental:
          form.transports[index + 1]?.type === Transfer.CAR &&
          form.transports[index + 1]?.value
            ? [form.transports[index + 1]?.value]
            : [],
        // form.transports?.[index]?.transport[
        //   form.transports?.[index].transport
        // ],
        rental_duration: destination.duration,
      }
    }),
    travellers: finalTravellers,
    // for calculate API
    people:
      countPeople(form.rooms, 'adults') + countPeople(form.rooms, 'children'),
    transports: ferryFlightTransfers ?? [],
  }
  // @ts-ignore
  return finalForm
}
