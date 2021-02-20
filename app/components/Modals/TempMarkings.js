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
    <h2>Temporary Road Markings</h2>
    <p>
      Premier RoadMarkings Ltd has completed numerous temporary traffic
      management schemes throughout the highways network for major Traffic
      Management companies, always carried out within allotted timescales and to
      the specific requirements of the client. This includes temporary
      reflective road studs, splitter systems, x-overs, rib line removal and
      temporary tape systems
    </p>
    <Carousel className='modal__carousel'>
      <img src='/assets/imgs/temp.jpg' />
    </Carousel>
  </div>
);

export default RoadMarkings;
