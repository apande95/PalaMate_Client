import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to PalaMate!</h1>
      <p className="text-lg mb-4">
        PalaMate is a dedicated platform designed to assist Paladins players. Our comprehensive search feature helps you find other players and access their game statistics.
      </p>
      <p className="text-lg mb-4">
        Learn more about your competitors' or allies' playing styles, strengths, and weaknesses, fostering strategic gameplay and promoting team synergy.
      </p>
      <p className="text-lg">
        PalaMate is not just a tool; it's a bridge to a more engaging and strategic gaming experience. Whether you're a novice or a seasoned player, PalaMate provides valuable insights that can enhance your Paladins journey.
      </p>
      <Link className="btn btn-secondary mt-4" to="/about">Start Exploring</Link>
    </div>
  );
};

export default Intro;
