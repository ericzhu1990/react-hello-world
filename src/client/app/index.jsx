import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer,Rectangle ,LayersControl,FeatureGroup,LayerGroup,Circle} from 'react-leaflet'
import L from 'leaflet';
const { BaseLayer, Overlay } = LayersControl
const position = [51.505, -0.09]
const center = [51.505, -0.09]
const rectangle = [[51.49, -0.08], [51.5, -0.06]]
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const map = (
  <Map center={position} zoom={13} >
     <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay name="Marker with popup">
            <Marker position={center}>
              <Popup>
                <span>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </span>
              </Popup>
            </Marker>
          </Overlay>
          <Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle center={center} fillColor="blue" radius={200} />
              <Circle
                center={center}
                fillColor="red"
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  color="green"
                  fillColor="green"
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name="Feature group">
            <FeatureGroup color="purple">
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>
 
  </Map>
)





render(map, document.getElementById('app'))