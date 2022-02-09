import React, { useEffect, useState } from 'react';
import Animal from './Animal';
import { getALLANimals } from './services/fetch-utils';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    async function displayAnimals() {
      const an1 = await getALLANimals();
      setAnimals(an1);
    }
    displayAnimals();
  }, []);

  return (
    <div>
      {animals.map((animal, i) => (
        <Animal key={`${animal}-${i}`} {...animal} />
      ))}
    </div>
  );
}
