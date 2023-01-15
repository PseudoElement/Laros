import EuboaIcon from '/public/assets/images/destinations/Regions/Euboa.svg'
import MacedoniaIcon from '/public/assets/images/destinations/Regions/Macedonia.svg'
import DodekannesIcon from '/public/assets/images/destinations/Regions/Dodekannes.svg'
import IonischeIcon from '/public/assets/images/destinations/Regions/Ionische.svg'
import KykladenIcon from '/public/assets/images/destinations/Regions/Kykladen.svg'
import KretaIcon from '/public/assets/images/destinations/Regions/Kreta.svg'
import PeloponnesIcon from '/public/assets/images/destinations/Regions/Peloponnes.svg'
import SporadenIcon from '/public/assets/images/destinations/Regions/Sporaden.svg'
import NordagaischeIcon from '/public/assets/images/destinations/Regions/Nordagaische.svg'
import MitteigriechenlandIcon from '/public/assets/images/destinations/Regions/Mitteigriechenland.svg'

import CyrpusIcon from '/public/assets/images/destinations/Cyrpus.svg'
import GreeceIcon from '/public/assets/images/destinations/Greece.svg'

import { Region } from 'shared/types/region'

import Greece from 'features/DestinationMaps/Greece/Greece'
import Cyrpus from 'features/DestinationMaps/Cyrpus/Cyrpus'

import Euboa from 'features/DestinationMaps/Euboa/Euboa'
import Sporaden from 'features/DestinationMaps/Sporaden/Sporaden'
import Macedonia from 'features/DestinationMaps/Macedonia/Macedonia'
import Ionische from 'features/DestinationMaps/Ionische/Ionische'
import Peloponnes from 'features/DestinationMaps/Peloponnes/Peloponnes'
import Kykladen from 'features/DestinationMaps/Kykladen/Kykladen'
import Kreta from 'features/DestinationMaps/Kreta/Kreta'
import Dodekannes from 'features/DestinationMaps/Dodekannes/Dodekannes'
import Mitteigriechenland from 'features/DestinationMaps/Mitteigriechenland/Mitteigriechenland'
import Nordagaische from 'features/DestinationMaps/Nordagaische/Nordagaische'

export const mockRegions: Region[] = [
  {
    name: 'Griechenland',
    icon: GreeceIcon,
    map: location => <Greece location={location!} />,
  },
  {
    name: 'Zypern',
    icon: CyrpusIcon,
    map: location => <Cyrpus location={location!} />,
  },
  {
    icon: EuboaIcon,
    map: location => <Euboa location={location!} />,
    name: 'Ionische inseln',
  },
  {
    icon: SporadenIcon,
    map: location => <Sporaden location={location!} />,
    name: 'Mittelgriechenland',
  },
  {
    icon: MacedoniaIcon,
    map: location => <Macedonia location={location!} />,
    name: 'Nordgriechenland',
  },
  {
    icon: IonischeIcon,
    map: location => <Ionische location={location!} />,
    name: 'Sporaden inseln',
  },
  {
    icon: IonischeIcon,
    map: location => <Ionische location={location!} />,
    name: 'Saronische inseln',
  },
  {
    icon: PeloponnesIcon,
    map: location => <Peloponnes location={location!} />,
    name: 'Peloponnes',
  },
  {
    icon: MitteigriechenlandIcon,
    map: location => <Mitteigriechenland location={location!} />,
    name: 'Euböa',
  },
  {
    icon: NordagaischeIcon,
    map: location => <Nordagaische location={location!} />,
    name: 'Nordägäische inseln',
  },
  {
    icon: KykladenIcon,
    map: location => <Kykladen location={location!} />,
    name: 'Kykladen inseln',
  },
  {
    icon: KretaIcon,
    map: location => <Kreta location={location!} />,
    name: 'Kreta',
  },
  {
    icon: DodekannesIcon,
    map: location => <Dodekannes location={location!} />,
    name: 'Dodekanes inseln',
  },
]
