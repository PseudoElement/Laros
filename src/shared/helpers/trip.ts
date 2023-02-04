import { Room } from 'shared/types/hotel'
import { PeopleCapacity } from 'shared/types/order'
import { TripDestination } from 'shared/types/trip'

export const getTripDuration = (destinations: TripDestination[]): number => {
  return destinations.reduce(
    (total: number, current: TripDestination) => total + current.duration,
    0
  )
}

export const findRooms = (rooms: Room[], people: number): Room[] => {
  const sortedRooms = rooms.sort((a, b) => b.capacity - a.capacity)
  if (!rooms.length) return []
  if (sortedRooms.find(room => room.capacity === people)) {
    return [sortedRooms.find(room => room.capacity === people) as Room]
  } else if (sortedRooms.find(room => room.capacity >= people)) {
    return [sortedRooms.find(room => room.capacity >= people) as Room]
  } else {
    let foundRooms: Room[] = []
    let peopleWithoutRoom = people
    while (peopleWithoutRoom > 0) {
      foundRooms.push(rooms[0])
      peopleWithoutRoom = peopleWithoutRoom - rooms[0].capacity
    }
    return foundRooms
  }
}

export const getClientsRoom = (
  rooms: Room[],
  capacity: PeopleCapacity[]
): Room[] => {
  let roomsForClients: Room[] = []
  for (let i = 0; i < capacity?.length; i++) {
    const newRooms = findRooms(rooms, capacity[i].adults)
    roomsForClients = [...roomsForClients, ...newRooms]
  }
  return roomsForClients
}
export function countPeople(
  array: PeopleCapacity[],
  key: keyof PeopleCapacity
): number {
  return array.reduce(function (r, a) {
    return r + a[key]
  }, 0)
}
