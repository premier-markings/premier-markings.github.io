import React from 'react';
const Carousel = require('nuka-carousel');

import Grid from '../../components/Grid';

export default function Home(props) {
  return (
    <div>
      <Carousel>
        <div className='landing-img landing-img__1'>
          <h1>PREMIER ROADMARKINGS LTD</h1>
          <h2>The Premier Road Marking Company</h2>
        </div>
        <div className='landing-img landing-img__2'>
          <h2>
            High quality temporary & permanent road marking services throughout
            the UK to the construction, civil engineering, traffic management
            and highway maintenance industries.
          </h2>
        </div>
        <div className='landing-img landing-img__3'>
          <h2>
            Premier RoadMarkings Ltd is fully Quality Assured to BS EN ISO
            9001:2008 for the application of road marking materials and road
            studs to road surfaces in compliance with the National Highways
            Agency Sector Scheme Documents 7.
          </h2>
        </div>
        <div className='landing-img landing-img__4'>
          <h2>
            We are a customer focused organisation, we believe in establishing
            long term business relationships and partnerships where we can use
            our expertise to the benefit of everyone involved in the contract.
            This approach results in improved safety, reliability, greater
            efficiency and quality workmanship throughout the term of the
            contract.
          </h2>
        </div>
      </Carousel>
      <Grid openModal={props.openModal} />
    </div>
  );
}
