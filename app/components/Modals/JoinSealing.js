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
    <h2>Joint Sealing & Overbanding</h2>
    <p>
      Premier RoadMarkings Ltd are fully accredited installers of Joint sealing and Overbanding. This product is a cost-effective way of ensuring the longevity of aging Tarmac.
    </p>
    <Carousel className="modal__carousel">
      <img src="/assets/imgs/website joint sealing and overbanding 1-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
