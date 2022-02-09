import { checkError, client } from './client';
// fecth functions

// Will need a function to fetch all
export async function getALLANimals(start = 0, end = 15) {
  const response = await client.from('foundAnimals').select().range(start, end);
  return checkError(response);
}
export async function getAnimalsNoRange() {
  const response = await client.from('foundAnimals').select();
  return checkError(response);
}

// will need a function to fetch one and match on id to obtain a single animal
export async function getSingleAnimal(id) {
  const response = await client
    .from('foundAnimals')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}
