import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = () => {

  return (
    <View style={styles.container}>
        <Icon name='book-outline' size={30} color='lightgrey' />
        <Text style={styles.spacedText}>
            Serif
        </Text>
        <Icon name='chevron-down-outline' size={14} color='grey' />
        <View style={styles.divider} />
        <Switch
            trackColor={{false: 'darkgrey', true: 'darkgrey'}}
            thumbColor={'white'}
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            // value={isEnabled}
        />
        <Icon name='moon-outline' size={30} color='darkgrey' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 30,
        alignItems: 'center'
    },
    spacedText: {
        marginLeft: 'auto',
        marginRight: 5,
        fontSize: 16
    },
    divider: {
        height: '100%',
        backgroundColor: 'lightgrey',
        width: 1,
        marginHorizontal: 20
    }
});
