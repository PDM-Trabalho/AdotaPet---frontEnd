import { linkApi } from "./config";

interface loginProps {
    email: string;
    password: string;
}

export const login = async (objUser: loginProps) => {
    const config = {
        method: "POST",
        body: JSON.stringify(objUser),
    };

    try {
        const tokens = await fetch(`${linkApi}/token`, config);
        console.log(tokens)
        return { ...tokens };
    } catch (e) {
        console.log(e);
    }
};
