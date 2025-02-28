import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"; // Default value

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // अगर आपको cookies भेजनी हों
});

export default instance;
