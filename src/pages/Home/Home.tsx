import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../components/Button';
import { Wrapper } from './Home.styled';

const Home = () => {
  const navigate = useNavigate();

  const [cityName, setCityName] = useState('');

  const changeCityNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value.trim());
  };

  const submitHandler = () => {
    if (cityName.length > 0) {
      navigate(`/weather/${cityName}`);
    }
  };

  return (
    <Wrapper>
      <form>
        <label>Give city name</label>
        <input type="text" value={cityName} onChange={changeCityNameHandler} />
        <Button text="Search" onClickHandler={submitHandler} />
      </form>
    </Wrapper>
  );
};

export default Home;
