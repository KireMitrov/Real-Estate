import React, { useRef } from 'react'
import Slider from "react-slick";
import { sliderData } from '../../../../assets/data/sliderData';
import "./properties.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Fade } from "react-awesome-reveal";


function Properties() {

  const sliderRef = useRef();

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
    <div className='properties-main-container'>
      <Fade duration={3000}>
        <div className="properties-text-container">
          <h2 className="properties-title">Display Latest & Featured Properties</h2>
          <p className="properties-text">With the features and filters provided with the Houzez widgets you can turn your visitors attention to the latest listings or the ones that are most profitable to buy at the moment.</p>
        </div>
      </Fade>
      <div className="properties-buttons">
        <button onClick={() => sliderRef.current.slickPrev()}>Prev</button>
        <button onClick={() => sliderRef.current.slickNext()}>Next</button>
      </div>
      <div className='slider-container'>
        <Slider ref={sliderRef} {...settings}>
          {sliderData.map((property) => (
            <div className='card-container'>
              <div className='property-card-img'>
                <img className="card-images" src={property.imageSrc} alt={property.title} />
                <div className="property-price-wrap">{property.price}</div>
                <div className="property-tags-wrap">
                  <span className='property-tag-featured'>FEATURED</span>
                  <span className='property-tag-forsale'>{property.tag}</span>
                </div>
              </div>
              <div className='property-title'>{property.title}</div>
              <div className='property-amenities'>
                <div className='amenties'>
                  <img width="16px" height="16px" src="https://img.icons8.com/parakeet-line/48/bed.png" alt="bed" />
                  {property.bedrooms}
                </div>
                <div className='amenties'>
                  <img width="16" height="16" src="https://img.icons8.com/pastel-glyph/64/shower-on--v2.png" alt="shower-on--v2" />
                  {property.bathroom}</div>
                <div className='amenties'>
                  <img width="16" height="16" src="https://img.icons8.com/external-flat-icons-inmotus-design/67/external-angle-angle-and-geometry-flat-icons-inmotus-design-6.png" alt="external-angle-angle-and-geometry-flat-icons-inmotus-design-6" />
                  {property.area} <span className='property-area-span'>Sq Ft</span></div>
              </div>
              <div className='property-type'>{property.type}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Properties