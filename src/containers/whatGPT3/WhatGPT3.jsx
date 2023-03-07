import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 has given us the ability to give our characters life. 
      We’re excited to combine an artist’s vision, AI, and emotional intelligence to create powerful narratives, 
      and believe that one day, everyone will know a Virtual Being." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="chatbots are able to generate accurate responses quickly, making them faster and more efficient than human customer service agents. 
      GPT-3 chatbots are also able to learn over time, making them more capable at responding to customer inquiries" />
      <Feature title="Knowledgebase" text=" It is an AI model that can generate text based on a knowledge base. It is fast and accurate, and can be used to create powerful chatbots that can understand natural language and respond with natural language. GPT-3 can use a variety of data sources, including webpages, books" />
      <Feature title="Education" text="GPT-3 can be used to generate high-quality research papers and essay topics, allowing researchers to quickly develop new ideas and theories" />
    </div>
  </div>
);

export default WhatGPT3;