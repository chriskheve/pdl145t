import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import first from '../../assets/images/icons/location/img.jpeg'
import second from '../../assets/images/icons/location/image.jpeg'

// import school from "../../../assets/images/icons/location/school.png"



const ImageComponent = ({territoire}) => {
  // let listOfImages;
  const [listOfImages, setListOfImages] = useState(null)
  const importAll = (r) => {
        return r.keys().map(r);
    }
    
  useEffect(()=>{
    console.log(territoire)
    const ter = "./images/TerritoireDibaya/"
    
    switch(territoire) {
        case 'TerritoireDibaya' : 
            return  setListOfImages(importAll(require.context('./images/KasaiCentral/TerritoireDibaya/', false, /\.(png|jpe?g|svg)$/)));
        case 'TerritoireDemba' : 
            return  setListOfImages(importAll(require.context('./images/KasaiCentral/TerritoireDemba/', false, /\.(png|jpe?g|svg)$/)));
        default:
            return  setListOfImages(importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/)));
    } 
    // setListOfImages(importAll(require.context( `./images/TerritoireDibaya/` , false, /\.(png|jpe?g|svg)$/)));
  },[])
  return (
    <div className='container'>
      
      {
        listOfImages && listOfImages.map(
          (image, index) =>    <img key={index} src={image} alt="info"></img>
        )
      }
    </div> 
  )
}

export default ImageComponent