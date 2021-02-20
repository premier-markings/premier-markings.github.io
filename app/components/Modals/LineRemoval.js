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
    <h2>Line Removal</h2>
    <ul>
      <li>Road Studs</li>
      <li>Hot Compressed Air</li>
      <li>Mechanical Scabbling</li>
      <li>Hand Chipping</li>
      <li>Hydroblast (Sub-Contract)</li>
      <li>Skid Steer</li>
    </ul>
    <Carousel className="modal__carousel">
      <img src="/assets/imgs/line_removal-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
