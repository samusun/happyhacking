import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import yo from '../assets/pictures/yo.png';
import ye from '../assets/pictures/ye.png';
import yu from '../assets/pictures/yu.png';

export default function MyCarousel() {
  function go(x) {
    console.log(x.target.alt);
  }

  return (
    <Carousel
      onClick={go}
      nextLabel={null}
      prevLabel={null}
      fade
      style={{ width: '25rem' }}
    >
      <Carousel.Item>
        <img className='d-block w-100' src={yo} alt='First' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={ye} alt='Second' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={yu} alt='Third' />
      </Carousel.Item>
    </Carousel>
  );
}
