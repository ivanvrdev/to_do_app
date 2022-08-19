import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'

import TaskItem from './TaskItem'

import { TasksContext } from '../../../context/TasksContext' 

// import { useGetTasks } from '../../../hooks/tasksHooks'

const TasksList = () => {

  const { tasksList } = useContext(TasksContext)

  // const tasksList = useGetTasks('1')

  return (
    <>
    {
      tasksList.length > 0 &&
      <FlatList 
          data={tasksList}
          renderItem={({item: task}) =>
              <TaskItem {...task}/> 
          }
      />
    }
    </>
  )
}

export default TasksList