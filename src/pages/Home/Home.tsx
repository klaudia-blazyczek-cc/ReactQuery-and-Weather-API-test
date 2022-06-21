import { useState, ChangeEvent } from 'react';

import { Button } from '../../components/Button';
import { Wrapper } from './Home.styled';

const Home = () => {
  const [cityName, setCityName] = useState('');

  const changeCityNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value.trim());
  };

  return (
    <Wrapper>
      <form>
        <label>Give city name</label>
        <input type="text" value={cityName} onChange={changeCityNameHandler} />
        <Button text="Search" onClickHandler={() => console.log('Search')} />
      </form>
    </Wrapper>
  );
};

export default Home;
