import { mockRegions } from 'shared/mocks/regions'
import { Location } from 'shared/types/maps'
import { Destination } from 'shared/types/destinations'
import { ReactNode } from 'react'

export interface Map {
  parent?: Destination & {
    map?: (location?: Location[]) => ReactNode
    icon: any
  }
  currentMap?: Destination & {
    map?: (location?: Location[]) => ReactNode
    icon: any
    destinations: Destination[]
  }
  location?: Location[]
}

interface getCurrentMapProps {
  destinations: Destination[]
  destination?: Destination
  route: string
}

export const getCurrentMap = ({
  destinations,
  destination,
  route,
}: getCurrentMapProps): Map => {
  const parent = destinations.find(item => item.id === destination?.parent)
  const mockCurrentMap = mockRegions.find(
    region => region.name === destination?.name
  )
  const mockParent = mockRegions.find(region => region.name === parent?.name)

  const location: Location[] = destinations
    .filter(d => d.parent === destination?.id)
    .map(location => ({
      id: location.id,
      link: `/destinations/${route}/${location.id}`,
      cardTitle: location.name,
      image: location.images[0],
      cardText: location?.description!,
    }))

  return {
    currentMap: destination && {
      ...destination,
      map: mockCurrentMap?.map,
      icon: mockCurrentMap?.icon,
      destinations: destinations.filter(item => item.parent === destination.id),
    },
    parent: parent && {
      ...parent,
      map: mockParent?.map,
      icon: mockParent?.icon,
    },
    location,
  }
}
