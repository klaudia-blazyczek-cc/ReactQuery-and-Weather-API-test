import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

import { getWeatherInCity } from '../../utils/axios-client';
import IWeatherData from '../../utils/IWeatherData';
import { WeatherDataWrapper } from './Weather.styled';

const defaultCity = 'Warsaw';

const Weather = () => {
  let { city } = useParams();
  const { isLoading, isSuccess, isError, data, error } = useQuery<IWeatherData, Error>('current-weather', async () => {
    return await getWeatherInCity(city !== undefined ? city : defaultCity);
  });

  if (isLoading) {
    return <h3>Loading ...</h3>;
  } else if (isError) {
    return <h3>{error.message}</h3>;
  } else if (isSuccess) {
    return (
      <WeatherDataWrapper>
        <p>{data?.city}</p>
        <p>{data?.temperature_c}&#8451;</p>
        <img src={data?.icon} alt="weather" />
        <p>{data?.description}</p>
      </WeatherDataWrapper>
    );
  } else {
    return <></>;
  }
};

export default Weather;
