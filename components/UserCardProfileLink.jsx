import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, StyleSheet, Text } from 'react-native'

import colors from '../styles/colors'

export default function UserCardProfileLink({uid, img, onNavigate}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onNavigate}>
            <Image source={{uri: img}} style={styles.logo}></Image>
            <Text style={styles.name}>{uid}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 5
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 4
    },
    name: {
        flexGrow: 2
    }
})