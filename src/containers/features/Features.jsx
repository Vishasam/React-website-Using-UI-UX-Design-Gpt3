import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Unrivaled Automation',
    text: ' GPT-3 is able to produce text that is highly realistic and grammatically correct. It is able to generate text that is indistinguishable from text written by a human.',
  },
  {
    title: 'Realistic Text Output',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Highly Versatile',
    text: ' GPT-3 is highly versatile and can be used for a variety of tasks. It can be used for language translation, summarization, question answering, and more.',
  },
  {
    title: 'Scalable',
    text: 'GPT-3 is highly scalable and can be used to generate large amounts of text quickly. This makes it ideal for applications such as automatic content generation.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;