import React from 'react'
import { Text, View, Button } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Constants from 'expo-constants';

import { grid, text } from '../../assets/styles'

import TasksList from './components/TasksList';

// import TaskForm from './components/TaskForm';

const ListScreen = ({navigation}) => {
  return (
    <View style={grid.screen}>
      <View style={grid.container}>
        <Text style={text.header}>Lista de tareas</Text>
        <Button 
          title='Agregar tarea'
          onPress={()=>navigation.navigate('form')}
        />
        {/* <TaskForm /> */}
        <TasksList />
        {/* <StatusBar style="auto" /> */}
      </View>
    </View>
  )
}

export default ListScreen