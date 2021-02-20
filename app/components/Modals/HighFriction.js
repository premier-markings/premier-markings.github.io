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
    <h2>High Friction Surfacing</h2>
    <p>
      The company is fully accredited to the national British Board of
      Aggregates standard (BBA) to apply high friction surfacing throughout the
      highways network. We are also approved installers of the Stirling Lloyd
      Safetrack HW MMA cold applied anti-skid system along with the cold applied
      MMA cycle track systems in various colours.
    </p>
    <Carousel className='modal__carousel'>
      <img src='/assets/imgs/website high friction surfacing-min.jpg' />
      <img src='/assets/imgs/high_friction_surfacing_3-min.jpg' />
    </Carousel>
  </div>
);

export default RoadMarkings;
