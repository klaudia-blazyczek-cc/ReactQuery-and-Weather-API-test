import axios from 'axios';

import IWeatherData from './IWeatherData';

const apiClient = axios.create({
  baseURL: `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&aqi=no&q=`,
  headers: {
    'Content-type': 'application/json',
  },
});

const getWeatherInCity = async (city: string) => {
  const response = await apiClient.get(city);
  const weatherData: IWeatherData = {
    city: response.data.location.name,
    temperature_c: response.data.current.temp_c,
    icon: response.data.current.condition.icon,
    description: response.data.current.condition.text,
  };
  return weatherData;
};

export { getWeatherInCity };
