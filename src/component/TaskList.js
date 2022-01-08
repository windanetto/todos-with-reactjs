import { Button, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { getAllTasks } from '../store/action/apiAction';
import Task from './Task';

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasksReducer.tasksList)

  useEffect(() => {
    dispatch(getAllTasks())
  }, []);

  // const taskList = tasks;
  // console.log(taskList)
  
  if (tasks) {
    return (
      <>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </>
    )
  } else {
    return (
      <Flex w='100%' flexDir='column' h='50vh' justifyContent='center'>
        <Button 
          isLoading 
          spinner={<BeatLoader size={10} color='blue' />}
        ></Button>
      </Flex>
    )
  }
  
}

export default TaskList
