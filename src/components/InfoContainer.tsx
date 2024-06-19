import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from './ListItem';
import { Meaning } from '../interfaces/DictionaryApiInterfaces';
import { ThemeContext } from '../context/themeContext';

interface InfoContainerProps {
  meaning: Meaning
}

export const InfoContainer = ({ meaning }: InfoContainerProps) => {

  const { themeState } = useContext(ThemeContext)

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{
          ...styles.title,
          color: (themeState.isDarkMode) ? 'white' : 'black'
        }}>
          { meaning.partOfSpeech }
        </Text>
        <View style={styles.divider}/>
      </View>
      <Text style={styles.subtitle}>
        Meaning
      </Text>
      {
        meaning.definitions && (
          meaning.definitions.map((def, i) => (
            <ListItem text={def.definition} example={def.example} key={i}/>
          ))
        )
      }
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 15,
  },
  divider: {
    flex: 1,
    backgroundColor: 'lightgrey',
    height: 1,
  },
  subtitle: {
    fontSize: 25,
    color: 'lightgrey',
    marginBottom: 30
  }
});
