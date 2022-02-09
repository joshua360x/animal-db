import React, { useEffect, useState } from 'react';
import { getALLANimals } from './services/fetch-utils';

export default function Home() {

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
      <h2>Welcome to Home</h2>
    </div>
  );
}
