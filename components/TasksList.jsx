import React, { useContext } from 'react'
import { FlatList } from 'react-native'

import TaskItem from './TaskItem'

import { TasksContext } from '../context/TasksContext' 

const TasksList = () => {

  const { tasksList } = useContext(TasksContext)

  return (
    <FlatList 
        data={tasksList}
        renderItem={({item: task}) =>
            <TaskItem {...task}/> 
        }
    />
  )
}

export default TasksList