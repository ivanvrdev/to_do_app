import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'

import {theme} from '../theme'

const TaskItem = (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(props.completed)

  return (
    <View style={styles.container}>
        <Text style={[theme.bold, styles.textSize]}>{props.id}</Text>
        <Text style={[theme.bold, styles.textSize]}>{props.description}</Text>
        {/* <Text style={theme.bold}>{props.completed ? 'Completo': 'Incompleto'}</Text> */}
        <Checkbox 
            style={styles.check}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textSize: {
        fontSize: 20
    },
    check: {
        margin: 5
    }
})

export default TaskItem