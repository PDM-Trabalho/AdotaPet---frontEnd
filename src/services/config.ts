import { Platform } from 'react-native';
import axios from "axios";

const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

const instance = axios.create({ 
    baseURL: `${baseUrl}:8000/api`,
});

export default instance;