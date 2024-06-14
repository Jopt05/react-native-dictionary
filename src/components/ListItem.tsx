import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ListItemProps {
    text: string;
    example?: string;
}

export const ListItem = ({ text, example }: ListItemProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.point} />
        <View>
            <Text style={styles.text}>
                { text }
            </Text>
            {
                example && (
                    <Text style={styles.exampleText}>
                        { example }
                    </Text>
                )
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 18
    },
    point: {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: 'red',
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        marginTop: 10
    },
    text: {
        flex: 1,
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 10
    },
    exampleText: {
        fontSize: 15,
        color: 'grey'
    }
});
