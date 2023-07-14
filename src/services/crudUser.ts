import axios from "./config";

export interface propsUser {
    email?: string;
    username?: string;
    password?: string;
    password_confirmation?: string;
    date_of_birthday?: string;
    phone?: string;
}

export const getUser = async (id: string) => {
    const user = await axios.get(`/users/${id}`)
    return { ...user.data };
}

export const postUser = async (objUser: propsUser) => {
    const user = await axios.post("/users/", objUser)
    return { ...user.data };
};

export const updateUser = async (id: string, objUser: propsUser) => {
    const user = await axios.patch(`/users/${id}`)
    return { ...user.data };
}

export const deleteUser = async (id: string) => {
    await axios.delete(`/users/${id}`)
}