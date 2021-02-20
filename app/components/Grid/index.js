import React from 'react';

const Grid = (props) => (
  <div className='grid-container'>
    <div className='text-container'>
      <h2>OUR SERVICES</h2>
      <h3>Complete road marking solutions accross the UK</h3>
    </div>
    <div className='grid'>
      <div
        className='box box-1'
        onClick={() => props.openModal('/road_markings')}>
        <h2>Road Marking</h2>
      </div>
      <div
        className='box box-2'
        onClick={() => props.openModal('/high_friction')}>
        <h2>High Friction Surfacing</h2>
      </div>
      <div
        className='box box-3'
        onClick={() => props.openModal('/temporary_markings')}>
        <h2>Temporary Road Markings</h2>
      </div>
      <div className='box box-4' onClick={() => props.openModal('/road_studs')}>
        <h2>Road Studs</h2>
      </div>
      <div
        className='box box-5'
        onClick={() => props.openModal('/line_removal')}>
        <h2>Line Removal</h2>
      </div>
      <div className='box box-6' onClick={() => props.openModal('/car_parks')}>
        <h2>Car Parks</h2>
      </div>
      <div
        className='box box-7'
        onClick={() => props.openModal('/playgrounds')}>
        <h2>Playgrounds and Recreational areas</h2>
      </div>
      <div className='box box-8' onClick={() => props.openModal('/recovery')}>
        <h2>Road Marking Recovery</h2>
      </div>
      <div
        className='box box-9'
        onClick={() => props.openModal('/depot_and_factory')}>
        <h2>Depot & Factory Markings</h2>
      </div>
      <div
        className='box box-10'
        onClick={() => props.openModal('/pre_formed')}>
        <h2>Pre-Formed Markings</h2>
      </div>
      <div
        className='box box-11'
        onClick={() => props.openModal('/joint_sealing')}>
        <h2>Joint Sealing & Overbanding</h2>
      </div>
      <div
        className='box box-12'
        onClick={() => props.openModal('/specialist_vehicles')}>
        <h2>Manufacturer of Specialist Vehicles</h2>
      </div>
    </div>
  </div>
);

export default Grid;
