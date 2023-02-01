import { useEffect, useState } from 'react'
import { Destination } from 'shared/types/destinations'
import { Trip } from 'shared/types/trip'
import { getTrip } from 'shared/api/routes/trips'
import { getCountries } from 'shared/api/routes/countries'
import { getAirportDestinations, getTransports } from 'shared/api/routes/destinations'
import { Country } from 'shared/types/country'
import { useAppSelector } from './redux'
import { Transfer, TransferOptions } from 'shared/types/transport'

export const useGetTripInfo = (
  id: number
): { trip: Trip | null, airports: Destination[], countries: Country[], isLoading: boolean, transfers: TransferOptions[], transferValues: number[] } => {
  const [airports, setAirports] = useState<Destination[]>([])
  const [trip, setTrip] = useState<Trip | null>(null)
  const [countries, setCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const regions = useAppSelector((state) => state.destinations.destinations);
  const [transfers, setTransfers] = useState<Record<number, TransferOptions>>([])
  const [transferValues, setTransferValues] = useState<number[]>([])

  const prepareTransfer = (transfers: Record<number, TransferOptions>): TransferOptions[] => {
    // console.log('transfers :', transfers);
    return Object.keys(transfers).map((key) => transfers[Number(key)])
  }
  useEffect(() => {
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
    const loadTransfer = async (from: number, to: number, index: number) => {
      let transfers: TransferOptions = {
        car: null,
        ferry: null,
        airport: null
      };
      try { // getTransfer from /api folder can be used // TODO
        const { data } = await getTransports(from, to)
        // console.log('data :', data);
        const transports = data.data
        const ferryTransfer = transports.find((transport) => transport.type_name === Transfer.FERRY);
        const airportTransfer = transports.find((transport) => transport.type_name === Transfer.FLIGHT);
        const carTransfer = transports.find((transport) => transport.type_name === Transfer.CAR);
        if (ferryTransfer) {
          transfers.ferry = ferryTransfer.id
        }
        if (airportTransfer) {
          transfers.airport = airportTransfer.id
        }
        if (carTransfer) {
          transfers.car = carTransfer.id
        }
        // now the next logic is implemented on server side in Trasnfer API:
        // const fromDestination = regions.find((dest) => dest.id === from.destination);
        // const toDestination = regions.find((dest) => dest.id === to.destination);
        // const parentDestination = regions.find((dest) => dest.id === fromDestination?.parent);
        // if (fromDestination && toDestination && fromDestination.parent === toDestination.parent && parentDestination && parentDestination.is_island === false) {
        //   transfers.car = toDestination.id
        // } 
      } catch (error) {

      }
      setTransfers((prev) => ({ ...prev, [index]: transfers }))
    }
    const destinations = trip?.destinations
    if (destinations?.length && trip) {
      loadTransfer(trip.dest_start, destinations[0].destination, 0)
      // console.log('tran first :', trip.dest_start, destinations[0].destination_name);
    }
    if (destinations?.length) {
      destinations.forEach((dest, index) => {

        // omit start point destination and last destination
        if (index + 1 < destinations.length) {
          loadTransfer(dest.destination, destinations[index + 1].destination, index + 1)
          // console.log('tran :', index, dest.destination_name, destinations[index + 1].destination_name);
        }
      })
    }
    if (destinations?.length && trip) {
      loadTransfer(destinations[destinations.length - 1].destination, trip.dest_start, destinations.length)
      // console.log('tran last :', destinations[destinations.length - 1].destination_name, trip.dest_start);
    }
  }, [trip])

  useEffect(() => {
    loadCountries()
    loadAirports()
  }, [])
  // console.log('transfers :', transfers);

  return { trip, airports, countries, isLoading, transfers: prepareTransfer(transfers), transferValues }
}
