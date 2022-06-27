import React, { useEffect } from 'react'
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import './Legend.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import school from "../../../assets/images/icons/location/school.png"
import administratif from "../../../assets/images/icons/location/administratif.png"
import healthcare from "../../../assets/images/icons/location/healthcare.png"
import energie from "../../../assets/images/icons/location/energie.png"
import forage from "../../../assets/images/icons/location/forage.png"
import logement from "../../../assets/images/icons/location/logement.png"
import marche from "../../../assets/images/icons/location/marche.png"




function Legend() {
  // console.log(map);
  
  const map = useMap()
  useEffect(() => {

    function getColor(d) {
      return  d === "Ecole" ? school :
      d === "Bâtiment administratif" ? administratif :
      d === "Centre de santé" ? healthcare :
      d === "Forage"  ? forage :
      d === "Logement"  ? logement :
      d === "Marché communautaire"  ? marche :
      energie;
    
    }
      

    if (map) {
      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        var div = L.DomUtil.create("div", "info legend"),
        grades = ["Ecole", "Energie", "Forage", "Centre de santé", "Bâtiment administratif", "Logement", "Marché communautaire"],
        labels = [],
        from, to;

        for (var i = 0; i < grades.length; i++) {
          from = grades[i];
          to = grades[i + 1];
    
        //   labels.push(
        //     '<i style="background:' + getColor(from) + '"></i> '  +
        //     from );
    
            labels.push(
              '<img className="icon-legend" style="width: 15px"  src="' + getColor(from) + '"></i> '  +
              from );
        }

        div.innerHTML = labels.join('<br>');
        return div;
      };

      legend.addTo(map);
    }
  }, [map]); //here add map
  return null;
}

export default Legend
