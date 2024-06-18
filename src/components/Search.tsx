import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebounce';
import { ThemeContext } from '../context/themeContext';

interface SearchInputProps {
    onDebounce: (text: string) => void;
}

export const Search = ({ onDebounce }: SearchInputProps) => {

    const { themeState } = useContext( ThemeContext );

    const [term, setTerm] = useState("hello");

  const debouncedValue = useDebouncedValue(term, 1000);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue])

  return (
    <View style={{
        ...styles.container,
        backgroundColor: (themeState.isDarkMode) ? "#1f1f1f" : "#f4f4f4"
        }} >
        <TextInput 
            style={{
                ...styles.input,
                color: (themeState.isDarkMode) ? 'white' : 'black'
            }}
            placeholder='Search here'
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={(value) => setTerm(value)}
            value={term}
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
        backgroundColor: '#f4f4f4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 20
    },
    input: {
        flex: 1
    },
    icon: {
        marginLeft: 'auto'
    }
})
