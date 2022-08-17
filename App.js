import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import TasksList from './components/TasksList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de tareas</Text>
      <TasksList />
      <StatusBar style="auto" />
    </View>
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
