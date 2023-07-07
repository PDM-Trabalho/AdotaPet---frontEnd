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

    const tokens = await fetch(`${linkApi}/token`, config);
    return { ...tokens };
};
