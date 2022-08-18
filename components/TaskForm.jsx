import React, { useContext, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native'
import { TasksContext } from '../context/TasksContext'

const TaskForm = () => {

    const { tasksList, setTasksList } = useContext(TasksContext)

    const [ description, setDescription ] = useState('')

    const handleChange = (text) =>{
        setDescription(text)
    }

    const handleSubmit = () =>{
        setTasksList(prev => [...prev, {
            id: (tasksList.length + 1),
            description: description,
            completed: false
        }])
        console.log(tasksList)
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput} 
                name='description'
                placeholder='descripción'
                onChangeText={handleChange}
            />
            <Button title='Agregar tarea' onPress={handleSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        width: Dimensions.get('window').width - 20
    }
})

export default TaskForm