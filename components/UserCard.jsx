import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ActionButton from './ActionButton'

export default function UserCard({name, description}) {
    return (
        <View style={styles.card}>
            <Text>{name}</Text>
            <Text>{description}</Text>

            <View style={styles.btnContainer}>
                <ActionButton title="X" negative={true}></ActionButton>
                <ActionButton title="\/" negative={false}></ActionButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        padding: 30,
        width: '100%'
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%'
    },
    btnContainerChild: {
        flexGrow: 1
    }
})