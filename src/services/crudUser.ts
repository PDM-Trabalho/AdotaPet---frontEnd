import axios from "./config";

export interface propsUser {
    email: string;
    username: string;
    password: string;
    password_confirmation: string;
}

export const postUser = async (objUser: propsUser) => {
    const user = await axios.post("/users/", objUser)
    return { ...user.data };
};

// export const updateUser = async({ nome, email })
