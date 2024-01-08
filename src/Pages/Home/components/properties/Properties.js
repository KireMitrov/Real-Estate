import React from 'react'
import Slider from "react-slick";
import { sliderData } from '../../../../assets/data/sliderData';
import "./properties.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Properties() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className="properties-text-container">
        <h2 className="properties-title">Display Latest & Featured Properties</h2>
        <p className="properties-text">With the features and filters provided with the Houzez widgets you can turn your visitors attention to the latest listings or the ones that are most profitable to buy at the moment.</p>
      </div>
      <Slider {...settings}>
        {sliderData.map((property) => (
          <div className='card-container'>
            <img src={property.imageSrc} alt={property.title} />
            <div>{property.title}</div>
            <div>
              <div>{property.bedrooms}</div>
              <div>{property.bathroom}</div>
              <div>{property.area}</div>
            </div>
            <div>{property.type}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Properties