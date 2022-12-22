import React from 'react'
import './testimonials.css'
import data from './review.js'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What do others think of me</h5>
      <h2>Testimonials</h2>

      <Swiper className="container test_container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
      {
          data.map((reviews) => {
            const {id, image, name, review} = reviews;
            return (
              <SwiperSlide id={id} className="test">
                  <div className="client_avatar">
                    <img src={image} alt={name} />
                  </div>
                    <h5 className='client_name'>{name}</h5>
                    <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </section>
  )
}

export default Testimonials


{/* <article className="test">
<div className="client_avatar">
  <img src={AVTR1} alt="Avatar One" />
  <h5 className='name'>Vish</h5>
  <small className="review">very bad person is amir!</small>
</div>
</article> */}