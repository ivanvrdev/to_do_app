import { createContext, useState } from 'react';
import { tasks } from '../data';

export const TasksContext = createContext(null)

export const TasksContextProvider = ({children}) =>{
  const [tasksList, setTasksList ] = useState(tasks)

  return (
    <TasksContext.Provider value={{tasksList, setTasksList}}>
      {children}
    </TasksContext.Provider>
  )
}