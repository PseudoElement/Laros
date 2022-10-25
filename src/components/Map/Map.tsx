import React from 'react'

import s from './Map.module.scss'

import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from 'react-leaflet'
import { Icon } from 'leaflet'

import mapMarker from '../../../public/assets/images/map-marker.svg'

const myIcon = new Icon({
  iconUrl: mapMarker.src,
  iconSize: [25, 25],
})

const Map = () => {
  return (
    <MapContainer
      className={s.map}
      center={[51.505, -0.09]}
      fullscreenControl={true}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker icon={myIcon} position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ZoomControl position='topright' />
    </MapContainer>
  )
}

export default Map
