import React, { useContext, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'

import { TasksContext } from '../../../context/TasksContext'

import { grid } from '../../../assets/styles'


const TaskForm = ({navigation}) => {
    const initialInputStyle = [styles.textInput]

    const { tasksList, setTasksList } = useContext(TasksContext)
    
    const [ description, setDescription ] = useState('')
    const [ inputStyle, setInputStyle ] = useState(initialInputStyle)
    const [ error, setError] = useState(null)

    const handleChange = (text) =>{
        if(inputStyle.length > 1 && description !== '') {
            setInputStyle(initialInputStyle)
            setError(null)
        } 
        setDescription(text)
    }

    const handleSubmit = () =>{
        if(description === '') {
            setInputStyle(prev => [...prev, styles.error])
            setError('El campo no debe estar vacío')
            return
        }

        setTasksList(prev => [...prev, {
            id: (tasksList.length + 1),
            title: description,
            completed: false
        }])
        navigation.navigate('list')
    }

    return (
        <View style={grid.container}>
            <TextInput 
                style={inputStyle} 
                name='description'
                placeholder='descripción'
                onChangeText={handleChange}
            />
            {error && <Text style={styles.errorAlert}>{error}</Text>}
            <Button title='Agregar tarea' onPress={handleSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10
    },
    error: {
        borderColor: 'red',
        marginBottom: 0
    },
    errorAlert: {
        color: 'red'
    }
})

export default TaskForm