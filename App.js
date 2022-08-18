import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';

import { TasksContextProvider } from './context/TasksContext';

export default function App() {
  return (
    <TasksContextProvider>
      <View style={styles.container}>
        <Text style={styles.header}>Lista de tareas</Text>
        <TaskForm />
        <TasksList />
        <StatusBar style="auto" />
      </View>
    </TasksContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
    // justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
