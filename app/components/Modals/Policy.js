import React from 'react';
import Carousel from 'nuka-carousel';

const RoadMarkings = (props) => (
  <div className='modal-container'>
    <button
      className='button-primary modal-button'
      data-modal-click='closeModal'
      onClick={props.closeModal}>
      Close
    </button>
    <h2>Policy Documents</h2>
    <p>See below for our policy documents. Links will open in a new window</p>
    <ul>
      <li>
        <a
          href='/assets/docs/health_and_safety_policy_statement.pdf'
          target='_blank'>
          Health & Safety Policy
        </a>
      </li>
      <li>
        <a
          href='/assets/docs/fair_and_prompt_payment_statement.pdf'
          target='_blank'>
          Fair and Prompt Payment Statement
        </a>
      </li>
      <li>
        <a href='/assets/docs/quality_policy.pdf' target='_blank'>
          Quality Policy
        </a>
      </li>
      <li>
        <a
          href='/assets/docs/environmental_policy_statement.pdf'
          target='_blank'>
          Environmental Policy
        </a>
      </li>
    </ul>
  </div>
);

export default RoadMarkings;
