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
    <h2>Pre-Formed Markings</h2>
    <p>
      Premier RoadMarkings Ltd applies pre-formed markings on request. They are product that looks fantastic when applied.
    </p>
    <Carousel className="modal__carousel">
      <img alt="hello world" src="/assets/imgs/pre_formed-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
