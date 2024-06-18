import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

export const InfoRow = () => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                Texto largo
            </Text>
            <View style={styles.spacer}/>
        </View>
        <Text style={styles.subtitle}>
            Subtitle
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 0
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginRight: 10
    },
    spacer: {
        flex: 1,
        height: 2,
        backgroundColor: 'lightgrey'
    },
    subtitle: {
        fontSize: 24,
        color: 'grey'
    }
});
