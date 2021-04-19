import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './slider.css';

SwiperCore.use([Autoplay, Pagination]);

const Slider = ({ slidesList }) => {

  const slides = slidesList.map((slide) => {
    const { id, href, alt, source, whiteText, blackText, right, discount, footerTitle, footerText } = slide;

    const getSlideText = () => {

      if (discount) {
        let slideText = 'slider__text  slider__text--discount';
        if(right) {
          slideText += ' slider__text--right'
        }

        return (
          <p className={slideText}>
            скидки до <br />
            <span className="slider__text--discount-b">
              {discount}
            </span>
          </p>
        )
      }

      return (
        <p className="slider__text title">
          <span className="slider__text--white">{whiteText}</span>
          <span className="slider__text--black">{blackText}</span>
        </p>
      )
    };

    return (
      <SwiperSlide key={id}>
        <a className=" slider__link link" href={href} target="" >
          <div className="slider__baner">
            <img
              alt={alt}
              className="slider__img swiper-lazy swiper-lazy-loaded"
              src={source}
            />
            {getSlideText()}
          </div>
          <div className="slider__footer">
            <h2 className="slider__title title">{footerTitle}</h2>
            <p className="slider__text-footer">{footerText}</p>
          </div>
        </a>
      </SwiperSlide>
    );
  });

  return (
    <div className='slider'>
      <div className='wrapper'>
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={0}
          slidesPerView={1}
          grabCursor
          pagination={{ clickable: true }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slidesList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Slider;
