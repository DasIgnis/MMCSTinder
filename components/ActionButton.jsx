import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

import colors from '../styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ActionButton({negative, title, onClicked}) {
    return (
        <TouchableOpacity 
            style={StyleSheet.compose(btnStyle.btn, {backgroundColor: negative ? colors.colorNegative : colors.colorPositive})}
            color={negative ? colors.colorNegative : colors.colorPositive}
            onPress={onClicked}>
            <Text style={btnStyle.textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

const btnStyle = StyleSheet.create({
    btn: {
        padding: 20,
        textAlign: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexDirection: 'row'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 30
    }
})