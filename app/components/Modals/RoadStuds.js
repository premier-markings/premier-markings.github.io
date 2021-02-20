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
    <h2>Road Studs</h2>
    <p>Premier RoadMarkings Ltd installs all types of road studs</p>
    <ul>
      <li>CATSEYE (EN1463 CLASS P1B)</li>
      <li>LIGHT DOME (EN1463 CLASS P1B)</li>
      <li>ARMOURSTUD (EN1463 CLASS P1A)</li>
      <li>STIMSONITE C80/381 (EN1463 CLASS P3A)</li>
      <li>STIMSONITE 980 (EN1463 CLASS P3A)</li>
      <li>3M TYPE 290 (EN1463 CLASS P3A)</li>
      <li>SOLARLITE</li>
      <li>STAINLESS STEEL CROSSING STUDS/ALUMINIUM CROSSING STUDS</li>
    </ul>
    <Carousel className="modal__carousel">
      <img alt="hello world" src="/assets/imgs/road_studs-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
