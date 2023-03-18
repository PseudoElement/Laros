import React, { useEffect, useRef, useState } from 'react'
import L, { Icon, LatLng, LatLngExpression, Layer } from 'leaflet'

import {
  MapContainer,
  TileLayer,
  ZoomControl,
  GeoJSON,
  FeatureGroup,
  Marker,
} from 'react-leaflet'

import { withDomain } from 'shared/helpers/withDomain'
import { convertLocation } from 'shared/helpers/convertLocation'

import { Feature, GeoJsonObject, Point } from 'geojson'
import { IconProperty, Route } from './types'

import mapPin from '/public/assets/images/map-pin-marker.svg?url'

import s from './Map.module.scss'
import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import 'leaflet-styleeditor/src/css/Leaflet.StyleEditor.css'
import 'leaflet-styleeditor/dist/javascript/Leaflet.StyleEditor'

const icon = new Icon({
  iconUrl: mapPin,
  iconSize: [35, 90],
})

interface MapProps {
  route?: string
  additionalRoutes?: string
  location?: string
  zoom?: number
}

const Map: React.FC<MapProps> = ({
  route: routeString,
  additionalRoutes: additionalRoutesString,
  location: locationString,
  zoom = 10,
}) => {
  const [route, setRoute] = useState<Route>()
  const [additionalRoutes, setAdditionalRoutes] = useState<Route>()
  const [location, setLocation] = useState<LatLngExpression>()
  const [center, setCenter] = useState<LatLngExpression>()
  const mapRef = useRef<any>(null)

  useEffect(() => {
    if (!locationString) return
    const coordinates = convertLocation(locationString)
    setLocation(coordinates)
    setCenter(coordinates)
  }, [locationString])

  useEffect(() => {
    if (!routeString) return
    setRoute(JSON.parse(routeString))
  }, [routeString])

  useEffect(() => {
    if (additionalRoutesString) {
      setAdditionalRoutes(JSON.parse(additionalRoutesString))
    }
  }, [additionalRoutesString])

  useEffect(() => {
    if (!route?.features[0]?.geometry?.coordinates) return
    if (locationString) return

    const coordinates = route.features[0].geometry.coordinates
    setCenter(
      ([coordinates[0], coordinates[1]] = [coordinates[1], coordinates[0]])
    )
  }, [route])

  useEffect(() => {
    if (mapRef.current !== null) {
      // @ts-ignore
      mapRef.current.addControl(L.control.styleEditor())
    }
  }, [mapRef.current])

  const pointToLayer = (
    center: Feature<Point, IconProperty>,
    latlng: LatLng
  ): Layer => {
    const { iconAnchor, iconColor, iconSize, iconUrl, opacity, popupAnchor } =
      center.properties

    return L.marker(latlng, {
      icon: new Icon({
        iconAnchor: iconAnchor,
        iconColor: iconColor,
        iconSize: iconSize,
        // @ts-ignore
        iconUrl: withDomain(iconUrl),
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
          ref={mapRef}
          fullscreenControl={true}
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/attributions">OpenStreetMap</a> contributors'
            url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
          />
          <FeatureGroup>
            {route?.features.map((feature: GeoJsonObject, i: number) => (
              <GeoJSON pointToLayer={pointToLayer} key={i} data={feature} />
            ))}
            {additionalRoutes?.features.map(
              (feature: GeoJsonObject, i: number) => (
                <GeoJSON pointToLayer={pointToLayer} key={i} data={feature} />
              )
            )}
          </FeatureGroup>
          {location ? <Marker position={location} icon={icon} /> : null}
          <ZoomControl position='topright' />
        </MapContainer>
      ) : null}
    </>
  )
}

export default Map
