import { NavigationContainer } from '@react-navigation/native';
import { TasksContextProvider } from './context/TasksContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen from './views/ListScreen.jsx/index.jsx';
import FormScreen from './views/FormScreen.jsx';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <TasksContextProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name='list'
            component={ListScreen}
            options={{title: 'Tareas'}}
          />
          <Stack.Screen 
            name='form'
            component={FormScreen}
            options={{title: 'Agregar tarea'}}
          />
        </Stack.Navigator>
      </TasksContextProvider>
    </NavigationContainer>
  );
}
