import React from 'react';

import { ButtonContainer } from './styles';


const Button = ({title, variant="prymary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export { Button }