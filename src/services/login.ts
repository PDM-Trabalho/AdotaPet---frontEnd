import axios from "./config";

interface loginProps {
    email: string;
    password: string;
}

export const login = async (objUser: loginProps) => {
    const tokens = await axios.post(`/token`, objUser);
    return { ...tokens };
};
