import { checkError, client } from './client';
// fecth functions

// Will need a function to fetch all
export async function getALLANimals() {
  const response = await client.from('foundAnimals').select();


  return checkError(response);
}

// will need a function to fetch one and match on id to obtain a single animal
export async function getSingleAnimal(id) {
  const response = await client.from('foundAnimals').select().match(id);

  return checkError(response);
}
