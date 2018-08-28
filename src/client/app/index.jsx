import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer,Rectangle ,LayersControl,FeatureGroup,LayerGroup,Circle} from 'react-leaflet'
import L from 'leaflet';
import './index.css';
import {geolocated} from 'react-geolocated';

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
  <div>
  <img src={require('../assets/logo.png')} className="index"/>  
  <Map center={position} zoom={13} >
     <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="BlackAndWhite">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay name="Marker with popup">

          </Overlay>
          <Overlay checked name="Layer group with circles">
            <LayerGroup>

              <LayerGroup>

              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name="Feature group">

          </Overlay>
        </LayersControl>
 
  </Map>

</div>  
)





render(map, document.getElementById('app'))