import { ReactNode } from 'react'
import { Location } from 'shared/types/maps'

export interface Region {
  icon: any //FIXME
  name: string
  map?: (location?: Location[]) => ReactNode //FIXME
}
