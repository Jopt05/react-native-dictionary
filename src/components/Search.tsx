import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const Search = () => {
  return (
    <View style={styles.container} >
        <TextInput 
            style={styles.input}
            placeholder='Search here'
            autoCorrect={false}
            autoCapitalize={'none'}
            onChange={(value) => console.log(value)}
        />
        <Icon style={styles.icon} name='search-outline' size={30} color='purple' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15
    },
    input: {
        color: 'black'
    },
    icon: {
        marginLeft: 'auto'
    }
})
