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
    <h2>Manufacturer of Specialist Vehicles</h2>
    <p>
      Premier RoadMarkings Ltd have the capabilities to fully manufacture screed wagons & High Friction Surface wagons.
      For further details please contact us:
      info@premier-roadmarkings.co.uk
    </p>
    <Carousel className="modal__carousel">
      <img src="/assets/imgs/website specialist vehicles 1-min.jpg" />
      <img src="/assets/imgs/website specialist vehicles 2-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
