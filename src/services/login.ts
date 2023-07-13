import axios from "./config";

interface loginProps {
    username: string;
    password: string;
}

export const login = async (objUser: loginProps) => {
    const response = await axios.post(`/token`, objUser)
    return { ...response.data }
};
