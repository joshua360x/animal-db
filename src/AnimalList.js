import React, { useEffect, useState } from 'react';
import Animal from './Animal';
import { getALLANimals, getAnimalsNoRange } from './services/fetch-utils';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [page, setPage] = useState(1);
  const [animalNoRange, setAnimalsNoRange] = useState(0);
  // const [perPage, setPerPage] = useState(15);
  const perPage = 15;

  useEffect(() => {
    async function animalsListToDisplay() {
      const data = await getAnimalsNoRange();
      setAnimalsNoRange(data.length);
    }
    animalsListToDisplay();
  }, []);

  useEffect(() => {
    async function displayAnimals() {
      const from = page * perPage - perPage;
      const end = page * perPage;
      const an1 = await getALLANimals(from, end);
      setAnimals(an1);
    }
    displayAnimals();
  }, [page]);

  return (
    <div>
      <h3>You are on Page {page}</h3>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button disabled={page >= animalNoRange / perPage} onClick={() => setPage(page + 1)}>Next</button>
      {animals.map((animal, i) => (
        <Animal key={`${animal}-${i}`} {...animal} />
      ))}
    </div>
  );
}
