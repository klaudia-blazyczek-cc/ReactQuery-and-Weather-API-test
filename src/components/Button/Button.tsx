import React from 'react';
import { StyledButton } from './Button.styled';

interface Props {
  text: string;
  onClickHandler: () => void;
}

const Button = ({ text, onClickHandler }: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClickHandler();
  };

  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
