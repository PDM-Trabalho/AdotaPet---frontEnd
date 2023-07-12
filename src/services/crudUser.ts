import axios from "./config";
// import axios from "axios";

export interface propsUser {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const postUser = async (objUser: propsUser) => {
    const objTest = {
        name: "Pedro",
        email: "pedrojuniorifpb@gmail.com",
        password: "pajspaspdjpasod",
        password_confirmation: "pajspaspdjpasod"
    }

    try {
        // const user = await fetch(`${linkApi}/users`, config);
        const user = await axios.post("/users", objTest)
        console.log(objTest)
        return { user };
    } catch (e) {
        console.log(e);
        return null;
    }
};

// export const updateUser = async({ nome, email })
