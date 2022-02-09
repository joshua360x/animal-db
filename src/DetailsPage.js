import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleAnimal } from './services/fetch-utils';

export default function DetailsPage() {
  const [currentAnimal, setCurrentAnimal] = useState({});

  const params = useParams();
  console.log('🚀 ~ file: DetailsPage.js ~ line 9 ~ DetailsPage ~ params', params.id);

  useEffect(() => {
    async function seeAnimal() {
      const animal = await getSingleAnimal(params.id);
      setCurrentAnimal(animal);
    }
    seeAnimal();
  }, [params.id]);

  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      <h2>Welcome to the Detail Page</h2>
      <h3>Hi {currentAnimal.Type}</h3>
      <p>
        I am a {currentAnimal.Type} and I kind look like a {currentAnimal['Looks Like']}
      </p>
    </div>
  );
}
