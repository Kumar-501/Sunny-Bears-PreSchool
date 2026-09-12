import React from 'react';
import './AnimalDecorations.css';

import tigerImage from '../assets/tiger.webp';
import giraffeImage from '../assets/girafee.webp';
import monkeyImage from '../assets/monkey.webp';
import zebraImage from '../assets/zebra.webp';
import elephantImage from '../assets/elephant.webp';
import lionImage from '../assets/lion.webp';

const animals = [
  {
    name: 'tiger',
    image: tigerImage,
    alt: 'Cute tiger illustration',
  },
  {
    name: 'giraffe',
    image: giraffeImage,
    alt: 'Cute giraffe illustration',
  },
  {
    name: 'monkey',
    image: monkeyImage,
    alt: 'Cute monkey illustration',
  },
  {
    name: 'zebra',
    image: zebraImage,
    alt: 'Cute zebra illustration',
  },
  {
    name: 'elephant',
    image: elephantImage,
    alt: 'Cute elephant illustration',
  },
  {
    name: 'lion',
    image: lionImage,
    alt: 'Cute lion illustration',
  },
];

function AnimalDecorations() {
  return (
    <div
      className="animal-decorations"
      aria-hidden="true"
    >
      {animals.map((animal) => (
        <div
          key={animal.name}
          className={`animal-decoration animal-${animal.name}`}
        >
          <img
            src={animal.image}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

export default AnimalDecorations;