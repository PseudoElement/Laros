import { useEffect, useState } from 'react'
import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'
import { getTrip } from 'shared/api/routes/trips'
import { getCountries } from 'shared/api/routes/countries'
import {
  getAirportDestinations,
  getTransports,
} from 'shared/api/routes/destinations'
import { Country } from 'shared/types/country'
import {
  Transfer,
  TransferOptions,
  TransferValue,
} from 'shared/types/transport'
import { getHotelTripDay } from 'shared/api/routes/order'
import { useAppSelector } from './redux'

interface GetTripParams {
  isHotelPage?: boolean
  isFreezed?: boolean
}

export const useGetTripInfo = (
  id: number,
  params: GetTripParams
): {
  trip: Trip | null
  airports: Destination[]
  countries: Country[]
  isLoading: boolean
  transfers: TransferOptions[]
  transferValues: TransferValue[]
} => {
  const { isHotelPage, isFreezed } = params
  const [airports, setAirports] = useState<Destination[]>([])
  const [trip, setTrip] = useState<Trip | null>(null)
  const [countries, setCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transfers, setTransfers] = useState<Record<number, TransferOptions>>(
    []
  )
  const [transferValues, setTransferValues] = useState<TransferValue[]>([])
  const [isTransfersLoaded, setIsTransfersLoaded] = useState(false)
  const prepareTransfer = (
    transfers: Record<number, TransferOptions>
  ): TransferOptions[] => {
    // console.log('transfers :', transfers);
    return Object.keys(transfers).map(key => transfers[Number(key)])
  }
  const form = useAppSelector(state => state.order.form)
  useEffect(() => {
    if (isHotelPage) {
      setIsLoading(false)
      return
    }
    if (!id) {
      return
    }
    const loadTrip = async (trip: number) => {
      try {
        const tripDetails = await getTrip(trip)
        // @ts-ignore
        setTrip(tripDetails.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadTrip(id)
    setIsLoading(false) // TODO we can take into account other API req for loading status
  }, [id])

  const loadCountries = async () => {
    try {
      // @ts-ignore
      const countries = await getCountries()
      setCountries(countries.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  const loadAirports = async () => {
    try {
      const airports = await getAirportDestinations()
      setAirports(airports.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const loadHotelTrip = async (id: number) => {
      if (!id) {
        return
      }
      try {
        const defaultTripDay = await getHotelTripDay(id, form.rooms)
        // console.log('defaultTripDay :', defaultTripDay);
        if (defaultTripDay) {
          // @ts-ignore
          setTrip({
            // @ts-ignore
            destinations: [
              {
                id: defaultTripDay.location.id,
                images: [],
                destination_name: defaultTripDay.location.name,
                description: defaultTripDay.location.description,
                duration: 1,
                trip: 1, //
                destination_id: defaultTripDay.location.id,
                hotel: defaultTripDay.hotel,
                hotel_name: defaultTripDay.hotel.name,
              },
            ],
          })
        }
      } catch (error) {
        console.log('error :', error)
      }
    }
    if (isHotelPage) {
      loadHotelTrip(id)
    }
  }, [id, isHotelPage])
  useEffect(() => {
    const loadTransfer = async (from: number, to: number, index: number) => {
      let transfers: TransferOptions = {
        car: null,
        ferry: null,
        airport: null,
      }
      try {
        // getTransfer from /api folder can be used // TODO
        const { data } = await getTransports(from, to)
        // console.log('data :', data);
        const transports = data.data
        const ferryTransfer = transports.find(
          transport => transport.type_name === Transfer.FERRY
        )
        const airportTransfer = transports.find(
          transport => transport.type_name === Transfer.FLIGHT
        )
        const carTransfer = transports.find(
          transport => transport.type_name === Transfer.CAR
        )
        if (ferryTransfer) {
          transfers.ferry = ferryTransfer.id
        }
        if (airportTransfer) {
          transfers.airport = airportTransfer.id
        }
        if (carTransfer) {
          transfers.car = carTransfer.id
        }
        if (transports.length === 0) {
          transfers.car = trip?.destinations[index].rental?.[0].id ?? null
        }
      } catch (error) {}
      setTransfers(prev => ({ ...prev, [index]: transfers }))
    }
    const destinations = trip?.destinations
    if (destinations?.length && trip) {
      loadTransfer(trip.dest_start, destinations[0].destination_id, 0)
      // console.log('tran first :', trip.dest_start, destinations[0].destination_name);
    }
    if (destinations?.length) {
      destinations.forEach((dest, index) => {
        // omit start point destination and last destination
        if (index + 1 < destinations.length) {
          loadTransfer(
            dest.destination_id,
            destinations[index + 1].destination_id,
            index + 1
          )
          // console.log('tran :', index, dest.destination_name, destinations[index + 1].destination_name);
        }
      })
    }
    if (destinations?.length && trip) {
      loadTransfer(
        destinations[destinations.length - 1].destination_id,
        trip.dest_start,
        destinations.length
      )
      // console.log('tran last :', destinations[destinations.length - 1].destination_name, trip.dest_start);
    }
    setIsTransfersLoaded(true)
  }, [trip])

  useEffect(() => {
    if (trip?.transports && isTransfersLoaded) {
      let preselectedTransferValues: TransferValue[] = []

      const preselectedTransfers: TransferValue[] = trip.destinations
        .slice(0, trip.destinations.length - 1)
        .map((dest, index) => {
          const preselectedTransport = trip.transports.find(
            transport =>
              transport.from_dest_name === dest.destination_name &&
              transport.to_dest_name ===
                trip.destinations[index + 1].destination_name
          )
          if (preselectedTransport) {
            return {
              type: preselectedTransport.type_name,
              value: preselectedTransport.id,
            }
          } else if (dest?.rental?.length) {
            return {
              type: Transfer.CAR,
              value: dest.rental[0].id,
            }
          } else {
            return {
              type: Transfer.CAR,
              value: null,
            }
            return null
          }
        })
      // add first transfer
      const preselectedStartTransfer = trip.transports.find(
        transport => transport.from_dest_name === 'Zürich'
      )
      if (preselectedStartTransfer) {
        preselectedTransferValues = [
          {
            type: preselectedStartTransfer.type_name,
            value: preselectedStartTransfer.id,
          },
        ]
      }
      // add transfers between regions
      preselectedTransferValues = [
        ...preselectedTransferValues,
        ...preselectedTransfers,
      ]
      // add last transfer
      const preselectedEndTransfer = trip.transports.find(
        transport => transport.to_dest_name === trip.end_dest.destination_name
      )
      if (preselectedEndTransfer) {
        preselectedTransferValues = [
          ...preselectedTransferValues,
          {
            type: preselectedEndTransfer.type_name,
            value: preselectedEndTransfer.id,
          },
        ]
      }
      setTransferValues(preselectedTransferValues)
    }
  }, [trip, transfers, isTransfersLoaded])

  useEffect(() => {
    loadCountries()
    loadAirports()
  }, [])

  return {
    trip,
    airports,
    countries,
    isLoading,
    transfers: prepareTransfer(transfers),
    transferValues,
  }
}
