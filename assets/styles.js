import { StyleSheet, Dimensions, StatusBar } from "react-native";

const screenHeight = Dimensions. get('screen'). height;
const windowHeight = Dimensions. get('window'). height;
const navbarHeight = screenHeight - windowHeight

export const grid = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        marginHorizontal: 10,
        marginBottom: navbarHeight
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