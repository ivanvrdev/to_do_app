import { createContext, useEffect, useState } from 'react';
import { useGetTasks} from '../hooks/tasksHooks'

// import { tasks } from '../data'

export const TasksContext = createContext(null)

export const TasksContextProvider = ({children}) =>{
  const tasks = useGetTasks('1')

  const [tasksList, setTasksList ] = useState(tasks)

  useEffect(()=>setTasksList(tasks), [tasks])

  return (
    <TasksContext.Provider value={{tasksList, setTasksList}}>
      {children}
    </TasksContext.Provider>
  )
}