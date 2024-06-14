import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebounce';

interface SearchInputProps {
    onDebounce: (text: string) => void;
}

export const Search = ({ onDebounce }: SearchInputProps) => {

    const [term, setTerm] = useState("hello");

  const debouncedValue = useDebouncedValue(term, 1000);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue])

  return (
    <View style={styles.container} >
        <TextInput 
            style={styles.input}
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
        backgroundColor: 'lightgrey',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 20
    },
    input: {
        color: 'black',
        flex: 1
    },
    icon: {
        marginLeft: 'auto'
    }
})
