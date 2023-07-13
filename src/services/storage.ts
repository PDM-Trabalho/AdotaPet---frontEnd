import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserIdStorage = async () => {
    const userId = await AsyncStorage.getItem("userId");
    return userId;
}