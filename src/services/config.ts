import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import axios from "axios";

const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
const accessToken = AsyncStorage.getItem("access_token");

const instance = axios.create({ 
    baseURL: `${baseUrl}:8000/api`,
    authorization: `Bearer ${accessToken}`
});

export const axiosPublic = axios.create({ 
    baseURL: `${baseUrl}:8000/api`,
});

export default instance;