import React from 'react';
import Carousel from 'nuka-carousel';

const RoadMarkings = (props) => (
  <div className='modal-container'>
    <button
      className='button-primary modal-button'
      data-modal-click='closeModal'
      onClick={props.closeModal}>
      Close
    </button>
    <h2>Car Parks</h2>
    <p>
      Premier RoadMarkings Ltd have completed many car park markings to an
      excellent standard.
    </p>
    <Carousel className='modal__carousel'>
      <img src='/assets/imgs/car_parks_1-min.jpg' />
      <img src='/assets/imgs/car_parks_2-min.jpg' />
      <img src='/assets/imgs/car_parks_3-min.jpg' />
      <img src='/assets/imgs/car_parks_5-min.jpg' />
      <img src='/assets/imgs/car_parks_6-min.jpg' />
    </Carousel>
  </div>
);

export default RoadMarkings;
