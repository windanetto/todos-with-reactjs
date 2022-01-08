import { Box, Checkbox, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateStatus } from '../store/action/apiAction';
import ButtonClick from './ButtonClick';
import { Link as ReachLink } from 'react-router-dom';

export const Task = ({ task }) => {
  const [checked, setChecked] = useState(task.completed);
  const dispatch = useDispatch();
  const path = `/detail/${task.id}`;

  const updTask = (e) => {
    e.preventDefault();

    const updStatus = {...task, completed: !checked};
    dispatch(updateStatus(updStatus));

    setChecked(e.target.checked)
  }

  return (
    <Flex w='100%' padding={5}>
      <Box w='90%'>
        <Checkbox 
          colorScheme='green' 
          size='lg'
          isChecked={checked}
          onChange={(e) => updTask(e)}
        >
          <Text fontSize='14px' as={task.completed ? 's' : ''}>
            {task.todo}
          </Text>
        </Checkbox>
      </Box>
      <Spacer />
      <Box w='10%' textAlign='right'>
        <Flex>
          <Link 
            as={ReachLink}
            to={path}
          >
            <Text 
              fontSize='14px' 
              color='blue' 
              textDecoration='underline' 
              pr={3}
            >See Detail</Text>
          </Link>
          <ButtonClick
          color={'red'}
          text={'Delete'}
          size={'xs'}
          onClick={() => dispatch(deleteTask(task))}
        />
        </Flex>
      </Box> 
    </Flex>
  )
}

export default Task
