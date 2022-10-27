import React from 'react'
import L, { Icon, latLng } from 'leaflet'

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
  GeoJSON,
  FeatureGroup,
} from 'react-leaflet'
import 'leaflet/dist/images/marker-shadow.png'

import mapMarker from '../../../public/assets/images/map-marker.svg'
import { gjson } from './geojson'
import { features } from 'process'

const Map = () => {
  const coordinates = gjson.features[0].geometry.coordinates

  const center = ([coordinates[0], coordinates[1]] = [
    coordinates[1],
    coordinates[0],
  ])

  const icon = gjson.features.map(f => f.properties.iconUrl || '')

  const myIcon = new Icon({
    iconUrl: icon[0],
    // iconUrl: mapMarker.src,
    iconSize: [25, 25],
  })

  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: mapMarker.src,
  //   iconUrl: mapMarker.src,
  //   shadowUrl: null,
  // })

  return (
    <MapContainer
      className={s.map}
      fullscreenControl={true}
      center={center as any}
      zoom={11}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <Marker icon={myIcon} position={center as any}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <FeatureGroup>
        {gjson.features.map((features, i) => (
          <>
            <GeoJSON
              pointToLayer={function (center, latlng) {
                return L.marker(latlng, { icon: myIcon })
              }}
              key={i}
              data={features as any}
            />
          </>
        ))}
      </FeatureGroup>
      <ZoomControl position='topright' />
    </MapContainer>
  )
}

export default Map
