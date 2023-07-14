import axios from "./config";

export const createFavorite = async (userId: string, idPet: string) => {
    const favorite = await axios.post(`/favorites/user/${userId}/pet/${idPet}/`);
    return favorite.data;
}

export const deleteFavorite = async (userId: string, idPet: string) => {
    const favorite = await axios.post(`/favorites/user/${userId}/pet/${idPet}/`);
    return favorite.data;
}