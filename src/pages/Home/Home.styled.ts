import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  max-width: 350px;

  form {
    display: flex;
    flex-direction: column;
    padding: 30px 20px;

    label {
      padding-bottom: 20px;
      font-size: 1.6rem;
      font-weight: bold;
    }

    input {
      font-size: 1.3rem;
      padding: 5px;
      border: 2px solid #3366ff;
      border-radius: 5px;

      &:focus,
      &:hover {
        outline: none;
      }
    }

    button {
      display: inline-block;
      margin: 20px auto 0 auto;
    }
  }
`;

export { Wrapper };
