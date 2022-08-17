import React from 'react'
import { FlatList } from 'react-native'

import TaskItem from './TaskItem'

import { tasks } from '../data'

const TasksList = () => {
  return (
    <FlatList 
        data={tasks}
        renderItem={({item: task}) =>
            <TaskItem {...task}/> 
        }
    />
  )
}

export default TasksList