import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox'

import { text } from '../../../assets/styles'

const TaskItem = (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(props.completed)

  return (
    <View style={styles.row}>
        <Text style={text.bold}>{props.id}</Text>
        <View style={styles.description}>
            <Text style={[text.bold, toggleCheckBox && styles.completed]}>{props.title}</Text>
        </View>
        {/* <Text style={theme.bold}>{props.completed ? 'Completo': 'Incompleto'}</Text> */}
        <Checkbox 
            // style={styles.check}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
        // width: Dimensions.get('window').width - 20
    },
    completed: {
        textDecorationLine: 'line-through'
    },
    description: {
        width: 300,
        alignSelf: 'flex-start'
    }
})

export default TaskItem