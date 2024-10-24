import axios from 'axios';

const API_KEY = "82ba69a23e3f5d4146ce23704c61831f";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city: string) => {
    try{
        const response = await axios.get(`${BASE_URL}/weather`,{
            params:{
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch(error){
        console.error("Erro ao buscar dados do clima");
        throw error;
    }
};