import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreens = () => {
    const sayCiao = 'Hola Hello'
    const name = 'Jacopo'

    return (
    <View>
    <Text style={styles.textStyle}>Getting there</Text>
    <Text style={styles.moreText}>My name is {name}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: 'coral'
    },

    moreText: {
        fontSize: 25,
        color: 'blue'
    }
})

export default ComponentsScreens