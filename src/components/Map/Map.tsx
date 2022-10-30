import React, { useEffect, useState } from 'react'
import L, { Icon, LatLngExpression } from 'leaflet'

import s from './Map.module.scss'

import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'

import {
  MapContainer,
  TileLayer,
  ZoomControl,
  GeoJSON,
  FeatureGroup,
} from 'react-leaflet'

import { GeoJsonObject } from 'geojson'

interface MapProps {
  route?: string
}

type Route = {
  type: 'FeatureCollection'
  features: Array<{
    type: 'Feature'
    properties: any
    geometry: { type: string; coordinates: Array<number> }
  }>
}

const Map: React.FC<MapProps> = ({ route: routeString }) => {
  const [route, setRoute] = useState<Route>()
  const [center, setCenter] = useState<LatLngExpression>()

  useEffect(() => {
    if (routeString === undefined) return
    setRoute(JSON.parse(routeString))
  }, [routeString])

  useEffect(() => {
    if (route === undefined) return

    const coordinates = route.features[0].geometry.coordinates
    setCenter(
      ([coordinates[0], coordinates[1]] = [coordinates[1], coordinates[0]])
    )
  }, [route])

  const pointToLayer = (center: any, latlng: any) => {
    const { iconAnchor, iconColor, iconSize, iconUrl, opacity, popupAnchor } =
      center.properties

    return L.marker(latlng, {
      icon: new Icon({
        iconAnchor: iconAnchor,
        iconColor: iconColor,
        iconSize: iconSize,
        iconUrl: iconUrl,
        opacity: opacity,
        popupAnchor: popupAnchor,
      }),
    })
  }

  return (
    <>
      {center ? (
        <MapContainer
          className={s.map}
          fullscreenControl={true}
          center={center}
          zoom={11}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <FeatureGroup>
            {route &&
              route.features.map((features: GeoJsonObject, i: number) => (
                <GeoJSON pointToLayer={pointToLayer} key={i} data={features} />
              ))}
          </FeatureGroup>
          <ZoomControl position='topright' />
        </MapContainer>
      ) : null}
    </>
  )
}

export default Map
