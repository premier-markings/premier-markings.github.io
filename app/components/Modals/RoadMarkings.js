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
    <h2>Road Markings</h2>
    <p>
       Premier RoadMarkings Ltd currently undertakes all aspects of road markings
       throughout the United Kingdom for numerous blue chip companies and local
       authorities. Our dedicated road marking teams will perform all your
       white lining requirements in a professional and courteous manner
       throughout any contract requirements in any area.
    </p>
    <Carousel className="modal__carousel">
      <img src="/assets/imgs/screed_5-min.jpg" />
      <img src="/assets/imgs/screed_3-min.jpg" />
      <img src="/assets/imgs/screed_4-min.jpg" />
      <img src="/assets/imgs/screed_2-min.jpg" />
    </Carousel>
  </div>
);

export default RoadMarkings;
