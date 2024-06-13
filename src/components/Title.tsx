import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const Title = () => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                keyboard
            </Text>
            <Text style={styles.fono}>
                Fonografía
            </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
            <Icon name='play-outline' size={20} color='purple' />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5
    },
    fono: {
        fontSize: 25,
        color: 'purple'
    },
    buttonContainer: {
        display: 'flex',
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'pink',
        borderRadius: 50
    }
})
