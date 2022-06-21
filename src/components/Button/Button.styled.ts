import styled from 'styled-components';

const StyledButton = styled.button`
  max-width: 120px;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #0073e6;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;

  &:focus,
  &:hover {
    background-color: #0066cc;
    cursor: pointer;
  }
`;

export { StyledButton };
