import { StyleSheet } from "react-native";

export const grid = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        marginHorizontal: 10
    }
})

export const text = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 5,
        alignSelf: 'center'
    },
    bold: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})