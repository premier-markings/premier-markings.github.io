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
    <h2>Depot & Factory Markings</h2>
    <p>
      Markings in factories are an assured way to improve safety within a depot.
      Pedestrian walkways, forklift routes, emergency exit routes, exclusion
      zone markings, one -way traffic markings & zebra crossings are just some
      ideas which may aid your duty of care as an employer.
    </p>
    <Carousel className='modal__carousel'>
      <img src='/assets/imgs/depot_factory_markings_3-min.jpg' />
      <img src='/assets/imgs/depots_factory_markings_2-min.jpg' />
      <img src='/assets/imgs/website depots and factory markings 1-min.jpg' />
      <img src='/assets/imgs/website depots and factory markings 4-min.jpg' />
    </Carousel>
  </div>
);

export default RoadMarkings;
