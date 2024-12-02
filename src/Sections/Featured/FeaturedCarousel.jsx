import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles

// Import the Swiper modules from the core
import { Navigation, Pagination } from 'swiper/modules';

// Import the Featured component
import Featured from './Featured';
import './Carousel.css';

function FeaturedCarousel() {
  return (
    <div className="FeaturedCarousel">
      <div className="FeaturedCarousel-Container">
         <div className="FeaturedCarousel-Container-Content">
            <h2 className='FeaturedCarousel-Container-Content-Heading'>Our Featured <span className='FeaturedCarousel-Container-Content-Heading-Highlight'>Program</span></h2>
            <Swiper
            spaceBetween={10} // Space between slides
            slidesPerView={3} // Show 3 slides at once
            navigation={true} // Enable next/prev buttons
            pagination={{ clickable: true }} // Enable pagination dots
            loop={true} // Infinite loop of slides
            modules={[Navigation, Pagination]} // Add Navigation and Pagination modules
            breakpoints={{
               340: {
                  slidesPerView: 1, // For smaller screens, show 1 slide
               },
               700: {
                  slidesPerView: 2, // For smaller screens, show 2 slide
               },
               1024: {
                  slidesPerView: 3, // For larger screens, show 3 slides
               },
            }}
            >
            <SwiperSlide><Featured /></SwiperSlide>
            <SwiperSlide><Featured /></SwiperSlide>
            <SwiperSlide><Featured /></SwiperSlide>
            <SwiperSlide><Featured /></SwiperSlide>
            <SwiperSlide><Featured /></SwiperSlide>
            <SwiperSlide><Featured /></SwiperSlide>
            </Swiper>
         </div>
         
      </div>

    </div>
  );
}

export default FeaturedCarousel;
