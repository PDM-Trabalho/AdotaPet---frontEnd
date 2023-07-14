import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserIdStorage = async () : Promise<string | null> => {
    const userId = await AsyncStorage.getItem("userId");
    return userId;
}

export const getTokenStorage = async () : Promise<string | null> => {
    const token = await AsyncStorage.getItem("access_token");
    return token;
}

interface propsToken { access: string, refresh: string }

export const loginStorage = async ({ access, refresh } : propsToken) => {
    await AsyncStorage.setItem("access_token", access);
    await AsyncStorage.setItem("refresh_token", refresh);
}

export const logoutStorage = async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("userId");
}