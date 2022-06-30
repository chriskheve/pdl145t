import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import first from '../../assets/images/icons/location/img.jpeg'
import second from '../../assets/images/icons/location/image.jpeg'

// import school from "../../../assets/images/icons/location/school.png"



const TerritoireLubao = () => {
  // let listOfImages;
  const [listOfImages, setListOfImages] = useState(null)
  const importAll = (r) => {
        return r.keys().map(r);
    }
    
  useEffect(()=>{
    setListOfImages(importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/)));
  })
  return (
    <div className='container'>
      
      {
        listOfImages && listOfImages.map(
          (image, index) =>    <img key={index} src={image} alt="info"></img>
        )
      }
      {/* <div className='text-center' style={{width: 50 + "%" }}>
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={1000}
          totalSlides={2}
          interval={7000}
        >
          <Slider>
            <Slide index={0}><img src={first} /></Slide>
            <Slide index={1}><img src={second} /></Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>  */}

    </div> 
  )
}

export default TerritoireLubao


