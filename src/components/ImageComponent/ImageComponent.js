import React, { useEffect, useState } from 'react'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import first from '../../assets/images/icons/location/img.jpeg'
import second from '../../assets/images/icons/location/image.jpeg'
import Slider from "react-slick";
import { Carousel } from 'react-bootstrap';

// import school from "../../../assets/images/icons/location/school.png"



const ImageComponent = ({territoire}) => {
  // let listOfImages;
  const [listOfImages, setListOfImages] = useState(null)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
      
      {/* {
        listOfImages && listOfImages.map(
          (image, index) =>    <img key={index} src={image} alt="info"></img>
        )
      } */}
      <Carousel>
        
          {
            listOfImages && listOfImages.map(
              (image, index) => {
                return(
                  
                    <Carousel.Item  key={index}>
                    <img src={image} alt="info"></img>
                  </Carousel.Item>
                )
              }   
            )
          }
      </Carousel>

        
				{/* <div className="carousel slide" data-ride="carousel" data-interval={3000}>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="assets/images/slider1.svg" className="img-fluid" alt="login page" />
							<div className="px-4 mt-4">
								<h4>Plateforme responsive</h4>
								<p>L'application est compatible à n'importe quel type d'écran.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="assets/images/slider2.svg" className="img-fluid" alt="login page" />
							<div className="px-4 mt-4">
								<h4>Multiple type d'utilisateur</h4>
								<p>Offre aux différents types d'utilisateurs des interfaces de gestion.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="assets/images/slider3.svg" className="img-fluid" alt="login page" />
							<div className="px-4 mt-4">
								<h4>Management des ressources humaines</h4>
								<p>Facilite au maximun la gestion de la ressource humaine.</p>
							</div>
						</div>
					</div>
				</div> */}
    </div> 
  )
}

export default ImageComponent