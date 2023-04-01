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
  const sortedRooms = rooms
    .sort((a, b) => b.capacity - a.capacity)
    .sort((a, b) => a.per_person_chf - b.per_person_chf)
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
): { roomsForClients: Room[]; isAllocated: boolean } => {
  let roomsForClients: Room[] = []
  let isAllocated: boolean = false
  const maxCapacity = rooms.reduce((acc, el) => {
    if (el.capacity > acc) acc = el.capacity
    return acc // check if we can't allocate the rooms according to the user preferences (used to show an alert).
  }, 0)

  if (capacity.some(room => room.adults + room.children > maxCapacity)) {
    isAllocated = true
  }
  for (let i = 0; i < capacity?.length; i++) {
    const newRooms = findRooms(rooms, capacity[i].adults)
    roomsForClients = [...roomsForClients, ...newRooms]
  }
  return { roomsForClients, isAllocated }
}
export function countPeople(
  array: PeopleCapacity[],
  key: keyof PeopleCapacity
): number {
  return array.reduce(function (r, a) {
    return r + a[key]
  }, 0)
}
