import { linkApi } from "./config";
// import axios from "axios";

export interface propsUser {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const postUser = async (objUser: propsUser) => {
    const config = {
        method: "POST",
        body: JSON.stringify(objUser),
    };

    try {
        const user = await fetch(`${linkApi}/users`, config);
        return { user };
    } catch (e) {
        console.log(e);
        return null;
    }
};

// export const updateUser = async({ nome, email })
