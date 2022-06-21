import styled from 'styled-components';

const WeatherDataWrapper = styled.div`
  background-color: #fff;
  width: 80%;
  max-width: 300px;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);

  p:first-child {
    font-size: 1.8rem;
  }

  p:nth-child(2) {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px;
  }

  img {
    width: 50%;
  }
`;

export { WeatherDataWrapper };
