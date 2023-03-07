import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">OpenAI: Revolutionizing AI<br />benefiting humanity  transforming lives</h1>

      <p>Through its cutting-edge research and projects, it is pushing the boundaries of AI development to new heights. OpenAI has numerous applications, including improving healthcare and transportation.
      OpenAI is a leader in the AI revolution, and its possibilities are virtually limitless
      </p>

    </div>
  </div>
);

export default Possibility;