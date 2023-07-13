import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserIdStorage = async () : Promise<string | null> => {
    const userId = await AsyncStorage.getItem("userId");
    return userId;
}

export const getTokenStorage = async () : Promise<string | null> => {
    const token = await AsyncStorage.getItem("userId");
    return token;
}

export const logoutStorage = async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("userId");
}