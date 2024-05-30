import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

// Service data
const services = [
  {
    title: 'Arabian Ranches',
    imgSrc: 'arabian-ranches.jpg'
  },
  {
    title: 'Arabian Ranches II',
    imgSrc: 'arabian-ranches-ii.jpg'
  },
  {
    title: 'Downtown Dubai',
    imgSrc: 'downtown-dubai.jpg'
  },
  {
    title: 'Dubai Hills Estate',
    imgSrc: 'dubai-hills-estate.jpg'
  },
  {
    title: 'Dubai Marina',
    imgSrc: 'dubai-marina.png'
  },
  {
    title: 'Emirates Living',
    imgSrc: 'emirates-living.jpg'
  }
];

const Carousel = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  // Function to determine number of slides to show based on screen width
  function getSlidesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return 1; // Show 1 card on mobile
    } else if (screenWidth < 992) {
      return 2; // Show 2 cards on tablet
    } else {
      return 3; // Show 3 cards on desktop
    }
  }

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(getSlidesToShow());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow, // Set number of slides to show dynamically
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container">
      <div className="carousel-container">
        <h2 className="text-center my-5">Services Carousel</h2>
        <div className="row">
          <Slider {...settings} ref={sliderRef}>
            {services.map((service, index) => (
              <div key={index} className="carousel-item">
                {/* Image with title */}
                <div className="image-container card mx-3">
                  <img src={service.imgSrc} alt={service.title} />
                  <div className="image-title" style={{position:'absolute',left:'140px',bottom:'5px',textTransform:'uppercase',color:'white',fontWeight:'bold'}}>{service.title}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className="prev-btn" style={{position:'absolute',right:'8%',top:'238%',backgroundColor:'white'}} onClick={goToNext}>&gt;</button>
        <button className="next-btn" style={{position:'absolute',left:'8%',top:'238%',backgroundColor:'white'}} onClick={goToPrev}>&lt;</button>
      </div>
    </div>
  );
};

export default Carousel;
