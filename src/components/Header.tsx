import React, { useContext } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext';

export const Header = () => {

    const { setDarkTheme, setLightTheme, themeState } = useContext( ThemeContext );

    function handleChange(value: boolean) {
        if( value ) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

  return (
    <View style={styles.container}>
        <Icon name='book-outline' size={30} color='lightgrey' />
        {/* <Text style={{
            ...styles.spacedText,
            color: (themeState.isDarkMode) ? 'white' : 'black'
        }}>
            Serif
        </Text>
        <Icon name='chevron-down-outline' size={14} color='grey' /> */}
        <View style={styles.divider} />
        <Switch
            trackColor={{false: 'darkgrey', true: '#a644ee'}}
            thumbColor={'white'}
            onValueChange={(value) => handleChange(value)}
            value={themeState.isDarkMode}
        />
        <Icon name={themeState.isDarkMode ? 'sunny-outline' : 'moon-outline'} size={30} color='darkgrey' />
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
        marginLeft: 'auto',
        height: '100%',
        backgroundColor: 'lightgrey',
        width: 1,
        marginHorizontal: 20
    }
});
