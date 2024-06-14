import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import SoundPlayer from 'react-native-sound-player'

interface TitleProps {
    title: string;
    phon: string;
    audio?: string;
}

export const Title = ({ phon, title, audio }: TitleProps) => {

    function playAudio() {
        SoundPlayer.playUrl(audio!)
    }

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                { title }
            </Text>
            <Text style={styles.fono}>
                { phon }
            </Text>
        </View>
        {
            audio && (
                <TouchableOpacity onPress={playAudio} style={styles.buttonContainer}>
                    <Icon name='play-outline' size={20} color='purple' />
                </TouchableOpacity>
            )
        }
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
