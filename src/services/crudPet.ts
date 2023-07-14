import axios from "./config";

interface PropsMeasurements {
  height?: number; 
  length?: number; 
  width?: number;
}

interface PropsPet {
  sex?: string;
  age?: string;
  race?: string;
  photo?: string;
  weight?: number;
  species?: string;
  carrying?: string;
  measurements?: PropsMeasurements;
}

export const getPets = async (userId: number, text: string) => {
  const pets = await axios.get(`/users/${userId}/pets/`);
  return pets.data;
}

export const getPetsFavorite = async (userId: string) => {
  const pets = await axios.get(`/users/${userId}/pets/favorites/`);
  return pets.data;
}

export const getPetAndUser = async (userId: string, idPet: string) => {
  const pets = await axios.get(`/users/${userId}/pets/${idPet}/`);
  return pets.data;
}

export const getPet = async (idPet: string) => {
  const pets = await axios.get(`/pets/${idPet}/`);
  return pets.data;
}

export const postPet = async (idPet: string, objPet: PropsPet) => {
  const pets = await axios.post(`/pets/${idPet}/`, objPet);
  return pets.data;
}

export const updatePet = async (idPet: string, objPet: PropsPet) => {
  const pets = await axios.patch(`/pets/${idPet}/`, objPet);
  return pets.data;
}

export const deletePet = async (idPet: string) => {
  await axios.delete(`/pets/${idPet}/`);
}