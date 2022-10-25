import React from 'react'

import s from './Map.module.scss'

import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl } from 'react-leaflet'
import { Icon } from 'leaflet'

import mapMarker from '../../../public/assets/images/map-marker.svg'
import Image from 'next/image'

const myIcon = new Icon({
  iconUrl: mapMarker.src,
  iconSize: [25, 25]
});

const Map = () => {
  return (
    <>
      <MapContainer
        className={s.map}
        center={[51.505, -0.09]}
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
      <Image src={mapMarker} />
    </>
  )
}

export default Map
