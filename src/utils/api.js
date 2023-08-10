import axios from "axios"


const API_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;


const headers = {
    Authorization: `bearer ${TMDB_TOKEN}`,

};

export const fetchFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}${url}`, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}