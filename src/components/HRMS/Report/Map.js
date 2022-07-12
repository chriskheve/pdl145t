import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl, LayerGroup, Circle, FeatureGroup } from 'react-leaflet'
// import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/GeoSearch";
import {  useSelector, useDispatch } from 'react-redux';
// import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css';
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/dist/styles.css";
import './Map.css'
import mapDefault from './mapDefault.json'
import {Icon} from 'leaflet'

import L from 'leaflet';
import Info from './Info';
import InfoCs from './InfoCs';
import { useHistory } from 'react-router-dom';
import { getProvince } from '../../../api/province';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Link } from 'react-router-dom';
import testimg from '../../../assets/images/test.jpeg'
import Legend from './Legend';
import school from "../../../assets/images/icons/education.png"
import { getEntite } from '../../../api/type_ouvrage';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';


const Map = () => {
    
    let history = useHistory()
    const dispatch = useDispatch()
    
    
    const [map, setMap] = useState(null);
    
    const [typeOuvrage, setTypeOuvrage] = useState([])
    const [provinceList, setProvinceList] = useState([])
    
	const geojsonData  = useSelector(state=> state.updateProvinceState.geojsonDataState)  

  const fetchData = React.useCallback(() => {
        getProvince()
        .then((response) => {
            setProvinceList(response.data)
        
        console.log('setProvinceList ', response.data)
        })
        .catch((error) => {
        console.log(error)
        })

        
    getEntite()
    .then(response => {
        setTypeOuvrage(response.data.entites)
        console.log('setTypeOuvrage list ', response.data.entites)
        
    })
    .catch((error) => {
        
      console.log(error)
      setTypeOuvrage([])
    })

    }, [])
    React.useEffect(() => {
    fetchData()
    }, [fetchData])
  
  
    return (
        <div className="map">
        {/* AIzaSyBqKcKK0Agpv6v-PGeaH9Ddq9U1KBLK1Hc */}
        <MapContainer center={[-4.034788, 21.755028]}  zoom={5} whenCreated={setMap}>
          
          
    <LayersControl position="topright">
      <LayersControl.Overlay checked name="Carte par défaut">
        {/* <Marker position={[-4.034788, 21.755028]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        
        <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              // http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}
              // http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
              // url="https://mts1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          />
      </LayersControl.Overlay>
      <LayersControl.Overlay  name="Vue satelite ">
        
        <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              // http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}
              // http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
              url="https://mts1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          />
      </LayersControl.Overlay>
    </LayersControl>


          <Info map={map} provinceList={provinceList} geojsonData={geojsonData} /> : ""
          <Legend />
      
      
          {typeOuvrage.map((item, index)=>{
            return(

              <Marker 
              position={[item.latitude, item.longitude]} 
                icon={ 
                  item.entite === "ecole" ? new Icon({iconUrl: require("../../../assets/images/icons/location/school.png"), iconSize: [22, 20], iconAnchor: [12, 20]}) :
                  item.entite === "batiment administratif" ? new Icon({iconUrl: require("../../../assets/images/icons/location/administratif.png"), iconSize: [25, 41], iconAnchor: [12, 41]}) :
                  item.entite === "centre de sante" ? new Icon({iconUrl: require("../../../assets/images/icons/location/healthcare.png"), iconSize: [25, 41], iconAnchor: [12, 41]}) :
                  item.entite === "forage"  ? new Icon({iconUrl: require("../../../assets/images/icons/location/forage.png"), iconSize: [25, 41], iconAnchor: [12, 41]}) :
                  item.entite === "logement"  ? new Icon({iconUrl: require("../../../assets/images/icons/location/logement.png"), iconSize: [25, 41], iconAnchor: [12, 41]}) :
                  item.entite === "marche communautaire"  ? new Icon({iconUrl: require("../../../assets/images/icons/location/marche.png"), iconSize: [25, 41], iconAnchor: [12, 41]}) :
                  new Icon({iconUrl: require("../../../assets/images/icons/location/energie.png"), iconSize: [25, 41], iconAnchor: [12, 41]})
                  // item.description && new Icon({iconUrl: require("../../../assets/images/icons/education.png"), iconSize: [25, 41], iconAnchor: [12, 41]})
                } 
              >
                <Popup>
                  <Link to="/hr-users">Type d'ouvrage : {item.description && item.description}, 
                    {item.territoire && item.territoire.description}, République Démocratique du Congo {item.territoire && item.territoire.province && item.territoire.province.province}.
                  </Link> <br/>
                  {/* <img src={testimg} alt='test img' />  */}
                </Popup>
              </Marker>
            )
          })}
          {/* <FullscreenControl /> */}
        </MapContainer>
      </div>
    )
}

export default Map
