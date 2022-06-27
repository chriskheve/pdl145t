import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import CountUp from 'react-countup'
import { MapContainer, Popup, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import mapDefault from './mapDefault.json'
import 'leaflet/dist/leaflet.css';
import './Map.css'
import Info from './Info';
import Legend from './Legend';
import Map from './Map';
import { getProvince } from '../../../api/province';
import { setGeojson } from '../../../actions/provinceAction';
import MapCs from './MapCs';


const Report = (props) => {
  const dispatch = useDispatch()
  const [provinceList, setProvinceList] = useState([])
  const [menu, setMenu] = useState("accueil")
  
	const geojsonData  = useSelector(state=> state.updateProvinceState.geojsonDataState)  
    
  const [map, setMap] = useState(null);
    const { fixNavbar } = props;

    const fetchData = React.useCallback(() => {
        getProvince()
        .then((response) => {
            setProvinceList(response.data)
        
        console.log('setProvinceList ', response.data)
        })
        .catch((error) => {
        console.log(error)
        })

    }, [])
    React.useEffect(() => {
      fetchData()
    }, [fetchData])

    const handleMenu = (menuChoice) => {
     if (menuChoice === 'accueil' ) {
        setMenu('accueil')
        dispatch(setGeojson('accueil'))
     } else if (menuChoice === 'localite' ) {
      
        setMenu('localite')
        dispatch(setGeojson('localite'))
     } else {
      setMenu('cs')
      dispatch(setGeojson('cs'))
     }
    }
  return (
    <>
        <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="nav nav-tabs page-header-tab">
                        <li className="nav-item"><a className={`nav-link ${menu === 'accueil' ? 'active' : ""}`} id="Report-tab" onClick={()=>{handleMenu('accueil')}} href="#Report-Invoices">Accueil</a></li>
                        <li className="nav-item"><a className={`nav-link ${menu === 'localite' ? 'active' : ""}`} id="Report-tab" onClick={()=>{handleMenu('localite')}} href="#Report-Invoices">Localite</a></li>
                        <li className="nav-item"><a className={`nav-link ${menu === 'cs' ? 'active' : ""}`} id="Report-tab" onClick={()=>{handleMenu('cs')}} href="#Report-Invoices">Centre de santé</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
          {geojsonData === 'accueil' && 
            <Map/>
          }
          {geojsonData === 'cs' && 
            <MapCs/>
          }
        </div>
    </>
  )
}

export default Report