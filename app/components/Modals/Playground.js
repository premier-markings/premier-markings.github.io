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
    <h2>Playgrounds and Recreational Areas</h2>
    <p>Premier RoadMarkings Ltd have undertaken many playgrounds and recreational areas over the years to a very high standard.</p>
    <Carousel className="modal__carousel">
      <img src="/assets/imgs/website parks and recreation 1-min.jpg" />
      <img src="/assets/imgs/parks_and_recreation_2-min.jpg" />
      <img src="/assets/imgs/playgrounds and recreation-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
