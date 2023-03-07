import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div><a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi44_m21MH9AhXq-3MBHWMtDqEQPAgI">
      <img src={google}  /> </a>
      
    </div>
    <div><a href="https://slack.com/intl/en-in">
      <img src={slack} /> </a>
    </div>
    <div><a href="https://www.atlassian.com/">
      <img src={atlassian} /></a>
    </div>
    <div><a href="https://www.dropbox.com/">
      <img src={dropbox} /></a>
    </div>
    <div><a href="https://www.shopify.com/">
      <img src={shopify} /></a>
    </div>
  </div>
);

export default Brand;