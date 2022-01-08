import { Box, Checkbox, Flex, Spacer, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/action/apiAction';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import ButtonClick from './ButtonClick';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [todo, setTodo] = useState('');
  const [completed, setCompleted] = useState(false);
  const [userId, setUserId] = useState(5);
  const [isEmpty, setIsEmpty] = useState(true)
  const dispatch = useDispatch();
  const history = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      alert('Please add a task!');
      return;
    }

    const task = { todo, completed, userId }
    dispatch(addTask(task))

    history('/')
    

    setTodo('')
    setCompleted(false)
  }

  return (
    <Flex w='100%' padding={5} flexDir='column'>
      <Text fontSize='xl' fontWeight='semibold' mb={1}>Input Your Task Here!</Text>
      <FormControl> 
        <Flex>
          <Checkbox 
            colorScheme='green' 
            size='lg'
            isChecked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          ></Checkbox>
          <Input
            ml={2}
            mr={2} 
            id='todo'   
            type='text' 
            placeholder='What do you want to do?'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <ButtonClick 
            color={'blue'}
            text={'Submit'}
            size={'md'}
            onClick={onSubmit}
          />
        </Flex>
      </FormControl>
    </Flex>
  )
}

export default AddTask
