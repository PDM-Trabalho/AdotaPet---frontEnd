import { createContext, useState } from "react";

const AuthContext = createContext({ });

const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState<string | null>();

    const login = (id: string) => setUserId(id);

    const logout = () => setUserId(null);

    return (
        <AuthContext.Provider
            value={{ userId, login, logout }}
        >
            { children }
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };