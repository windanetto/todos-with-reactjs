import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask } from '../store/action/apiAction';
import ButtonClick from './ButtonClick';

const TaskDetail = () => {
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasksReducer.task);
  const paramsId = useParams();
  const id = Number(paramsId.id);
  const history = useNavigate();

  useEffect(() => {
    dispatch(getTask(id))
  }, [dispatch])

  const goBack = () => {
    history('/')
  }

  console.log(task)
  return (
    <Flex 
      w='100%' 
      flexDir='column' 
      justifyContent='center'
      textAlign='center'
      h='50vh'
    >
      <Box>
        <Text fontSize='2xl' fontWeight='bold'>{task?.todo}</Text>
        <Text
          fontSize='xl'
          color={task?.completed ? 'green' : 'red'}
        >
          {task?.completed ? 
            'Congratulation Your Task is Done!!!' :
            'Sorry, Your Task not Finished yet :('
          }
        </Text>
      </Box>
      <Box mt={4}>
        <ButtonClick 
          color='red'
          text='Back'
          size='lg'
          onClick={goBack}
        />   
      </Box>
    </Flex>
  )
}

export default TaskDetail
