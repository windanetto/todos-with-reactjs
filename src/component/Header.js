import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonClick } from './ButtonClick';

export const Header = ({ title, onAdd, showAdd }) => {

  return (
    <Flex w='100%' alignItems='center' padding={2}>
      <Heading as='h2' size='3xl'>{ title }</Heading>
      <Spacer />
      <ButtonClick 
        color={ showAdd ? 'red' : 'green' }
        text={ showAdd ? 'Close' : 'Add' }
        size={'md'}
        onClick={onAdd}
      />  
    </Flex>
  )
}

Header.defaultProps = {
  title: 'Todos List'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
