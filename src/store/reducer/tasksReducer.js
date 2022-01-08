const intiate = {
  tasksList: [],
  task: null
}

export const tasksReducer = (state = intiate, action) => {
  switch (action.type) {
    case 'FETCH_TASK_LIST':
      return { ...state, tasksList: action.payload }
    case 'POST_TASK': 
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload]
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasksList: state.tasksList.filter(task => task !== action.payload)
      }
    case 'UPDATE_STATUS':
      return {
        ...state,
        tasksList: state.tasksList.map(task =>
          (task.id === action.payload.id) ? {...task, completed: action.payload.completed } : task
        )
      }
    case 'FETCH_TASK':
      return { ...state, task: action.payload }
    default:
      break;
  }

  return state;
}

export default tasksReducer
