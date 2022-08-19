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

    const [buttonText, setButtonText] = useState('agregar tarea')
    const [disabledButton, setDisabledButton] = useState(false)

    const handleChange = (text) =>{
        if(inputStyle.length > 1 && description !== '') {
            setInputStyle(initialInputStyle)
            setError(null)
        } 
        setDescription(text)
    }

    const handleSubmit = async () =>{
        if(description === '') {
            setInputStyle(prev => [...prev, styles.error])
            setError('El campo no debe estar vacío')
            return
        }

        setDisabledButton(true)
        setButtonText('Enviando...')

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: description,
                completed: false,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const newTask = await response.json()

        newTask.id = tasksList.length + 1

        setTasksList(prev => [...prev, newTask])
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
            <Button 
                title={buttonText}
                disabled={disabledButton}
                onPress={handleSubmit}
            />
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