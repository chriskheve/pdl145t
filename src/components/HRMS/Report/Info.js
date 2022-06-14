import React, { useEffect, useState } from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet'
import mapDefault from './mapDefault.json'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import school from "../../../assets/images/icons/education.png"
import administratif from "../../../assets/images/icons/city-hall.png"
import healthcare from "../../../assets/images/icons/healthcare.png"
import hospital from "../../../assets/images/icons/hospital.png"
import forage from "../../../assets/images/icons/oil-pump.png"
import {Icon} from 'leaflet'
import { useHistory } from 'react-router-dom';
import { getProvince } from '../../../api/province';
import { setProvince } from '../../../actions/provinceAction';
import { toggleProvinceSidebar, setProvinceData } from '../../../actions/sidebarAction';
import { useDispatch, useSelector } from 'react-redux';
import "leaflet.heat";
import { addressPoints } from "./addressPoints";

function Info({provinceList}) {
	let history = useHistory()
  const dispatch = useDispatch()
  const map = useMap()
  
	const isOpen  = useSelector(state=> state.updateSidebarState.isOpen)  
  

  
  const handleProvince = (prov) => {
    dispatch(toggleProvinceSidebar(true))
    dispatch(setProvince(prov))
    for (let i = 0; i < provinceList.length; i++) {
      
      // if (prov.toLowerCase() === provinceList[i].nom.toLowerCase()) {
        
      //   console.log(prov.toLowerCase())
      //   dispatch(setProvince(provinceList[i]))
      //   history.push('/hr-assure') 
      // } 
    }
  }
  
  useEffect(() => {

      
    console.log(provinceList)
    var div;
    
    function getColor(d) {
      return  d > 400 ? '#1c478b' :
      // d > 300 ? '#fb6a4a' :
      d > 300 ? '#1c478b' :
      d > 200  ? '#1c478b' :
      d > 100  ? '#dde3e9' :
                  '#dde3e9';
    // 1c478b
    }

    if (map) {
      const info = L.control();

      // 

      function style(feature) {
        
        return {
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7,
          // fillColor: getColor(10)
          fillColor: getColor(feature.properties.liveCases)
        };
      }

      info.onAdd = () => {
        div = L.DomUtil.create("div", "info infos" );
        info.update()
        var x = document.getElementsByClassName("info infos leaflet-control")[0];
        if (typeof(x)!== 'undefined') {
          
          x.remove()
          // console.log("x is..",x)
        }
        return div;
      };

      info.update= function(props){
        
        // div.innerHTML = `<h4>RD CONGO</h4>
        // <div style="color: #000000"><b>
        //   ${props.name}</b><br />
        // </div>`

        
          div.innerHTML = '<h4>RD CONGO</h4>' +  (props ?
        '<b>' + props.name + '</b>' 
        : 'Survolez une province ');
      }

      
      function highlightFeature(e) {
        var layer = e.target;

        // add_layer(e.target)

        layer.setStyle({
          weight: 5,
          color: '#FF0000',
          dashArray: '',
          fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          layer.bringToFront();
        }

        info.update(layer.feature.properties);
      }

    var geojson;
    function resetHighlight(e) {
      
      // remove_layer(e.target)
      geojson.resetStyle(e.target);
      info.update();
    }

	function zoomToFeature(e) {
    var layer = e.target;
    // add_layer(e.target)
		// map.fitBounds(e.target.getBounds());
    // setVilleData(layer.feature.properties.ville)
    // console.log("layer is...", layer.feature.properties.name)
    handleProvince(layer.feature.properties.name) 
    // console.log("provinces geojson", provsDatas)
    
    // dispatch(setCitiesDatas(layer.feature.properties.ville))
    // showMarker()
    // history.push('/') 
    
	}

  function add_layer(value){
    console.log(value)
    if(map.hasLayer(value)) {
        map.removeLayer(value);
    }else{
        map.addLayer(value);
    }
  }

  function test(e){
  }

  function remove_layer(value){
    console.log(value)
    if(map.hasLayer(value)) {
        map.addLayer(value);
    }else{
        map.removeLayer(value);
    }
  }

  // remove_layer

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature,
      zoom: test
		});
	}


  
//   const points = addressPoints
//   ? addressPoints.map((p) => {
//       return [p[0], p[1]];
//     })
//   : [];

// L.heatLayer(points).addTo(map);


      info.addTo(map);
      geojson = L.geoJson(mapDefault, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    }
    
  console.log(map)
  }, [map, provinceList]); //here add map
  const showMarker=()=>(
    
    <Marker 
    position={[-4.3217055, 15.3125974]} 
      icon={new Icon({iconUrl: school, iconSize: [25, 41], iconAnchor: [12, 41]})} 
    >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )
  
  console.log(map)
  return null;
}

export default Info
