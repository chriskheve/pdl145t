import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import first from '../../assets/images/icons/location/img.jpeg'
import second from '../../assets/images/icons/location/image.jpeg'
import ImageComponent from '../ImageComponent/ImageComponent';

// import school from "../../../assets/images/icons/location/school.png"



const TerritoireKazumba = () => {
  return (
    
    <ImageComponent territoire={"TerritoireKazumba"} />
  )
}

export default TerritoireKazumba