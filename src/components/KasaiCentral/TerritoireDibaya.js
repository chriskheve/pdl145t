import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import first from '../../assets/images/icons/location/img.jpeg'
import second from '../../assets/images/icons/location/image.jpeg'
import ImageComponent from '../ImageComponent/ImageComponent';

// import school from "../../../assets/images/icons/location/school.png"



const TerritoireDibaya = () => {
  return (
    <ImageComponent territoire={"TerritoireDibaya"} />
    // <div className='container'>
      
    //   {
    //     listOfImages && listOfImages.map(
    //       (image, index) =>    <img key={index} src={image} alt="info"></img>
    //     )
    //   }
    // </div> 
  )
}

export default TerritoireDibaya