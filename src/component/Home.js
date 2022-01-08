import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Header from './Header';
import AddTask from './AddTask';
import AppRouting from './HomeRouting';


export const Home = () => {
  const [showAdd, setshowAdd] = useState(false)
 

  return (
    <Flex 
      w='100%' 
      flexDir='column' 
      justifyContent='center'
      backgroundColor='#f4f4f4'
      border='1px solid #353535'
      h='100%'
      margin='50px'
      borderRadius='10px'
      padding='20px'
    >
      <Header 
        onAdd={() => setshowAdd(!showAdd)}
        showAdd={showAdd}
      />

      {showAdd && <AddTask />}

      <AppRouting />
    </Flex>
  )
}

export default Home;

