import React from 'react'

// Fetch Tasks
const url = 'https://dummyjson.com/todos'

export const getAllTasks = () => {
  return (dispatch) => {
    fetch(`${url}`, { method: 'GET' })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw {res};
        }
      })
      .then(res => {
        dispatch({
          type: 'FETCH_TASK_LIST',
          payload: res.todos
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
        alert('There is Something Error!')
      })
  }
}

export const getTask = (id) => {
  return (dispatch) => {
    fetch(`${url}/${id}`, { method: 'GET' })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw {res};
        }
      })
      .then(res => {
        console.log(res,'ni apa')
        dispatch({
          type: 'FETCH_TASK',
          payload: res
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
        alert('There is Something Error!')
      })
  }
}

export const addTask = (task) => {
  return (dispatch) => {
    fetch(`${url}/add`, { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw {res}
        }
      })
      .then(res => {
        dispatch({
          type: 'POST_TASK',
          payload: res
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
        alert('There is Something Error!')
      })
  }
}

export const updateStatus = (task) => {
  return (dispatch) => {
    fetch(`${url}/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        completed: task.completed
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw {res}
        }
      })
      .then(res => {
        dispatch({
          type: 'UPDATE_STATUS',
          payload: task
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
        alert('There is Something Error!')
      })
  }
}


export const deleteTask = (task) => {
  return (dispatch) => {
    fetch(`${url}/${task.id}`, { method: 'DELETE' })
      .then(res => {
         console.log(res,'res delete')
        dispatch({
          type: 'DELETE_TASK',
          payload: task
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
        alert('There is Something Error!')
      })
  }
}


