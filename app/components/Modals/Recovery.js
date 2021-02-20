import React from 'react';
import Carousel from 'nuka-carousel';

const RoadMarkings = props => (
  <div className="modal-container">
    <button
      className="button-primary modal-button"
      data-modal-click="closeModal"
      onClick={props.closeModal}
    >
      Close
    </button>
    <h2>Road Marking Recovery</h2>
    <p>Premier RoadMarkings Ltd have undertaken roadmarking recovery contracts over the years to a very high standard.</p>
    <Carousel className="modal__carousel">
      <img src="/assets/imgs/screed_5-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
