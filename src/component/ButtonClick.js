import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ButtonClick = ({ color, text, size, onClick }) => {
  return (
    <Button
      colorScheme={color}
      onClick={onClick}
      size={size}
    >{text}</Button>
  )
}

Button.propTypes = {
  text: PropTypes.string, 
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default ButtonClick
