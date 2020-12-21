import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import colors from '../styles/colors'
import stylesheet from '../styles/stylesheet'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function FavsListItem({profileUri, name, prefs, flaws, onPress}) {
    return (
        <TouchableOpacity 
                style={styles.container}
                onPress={onPress}>
            <Image source={{uri: profileUri}} style={styles.photo}></Image>
            <View style={styles.infoBlock}>
                <Text style={styles.name}>{name}</Text>
                <ScrollView style={styles.pillsContainder} horizontal={true}>
                    {
                        prefs.map(x => (
                            <Text 
                                key={x} 
                                style={StyleSheet.compose(stylesheet.pillPositive, stylesheet.pill)}>
                                {x}
                            </Text>
                        ))
                    }
                </ScrollView>
                <ScrollView style={styles.pillsContainder} horizontal={true}>
                    {
                        flaws.map(x => (
                            <Text
                                key={x} 
                                style={StyleSheet.compose(stylesheet.pillNegative, stylesheet.pill)}>
                                {x}
                            </Text>
                        ))
                    }
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1
    },
    photo: {
        width: 80,
        height: 80,
        marginRight: 8,
        borderRadius: 100
    },
    infoBlock: {
        flexGrow: 2,
        padding: 8
    },
    name: {
        color: colors.textMain,
        fontSize: 18,
        marginBottom: 4
    },
    pillsContainder: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
})