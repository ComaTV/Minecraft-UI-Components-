import React from 'react';
import RotatingWheel from './Component';

const items = [
  { name: "Banana" },
  { name: "iPhone" },
  { name: "Nothing" },
  { name: "Car" },
  { name: "Vacation" },
  { name: "Pizza" },
];

export default function Home() {
  return (
      <RotatingWheel items={items} />
  );
}