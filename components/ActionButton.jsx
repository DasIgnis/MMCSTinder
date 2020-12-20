import React from 'react';
import { Button, StyleSheet } from 'react-native';

import colors from '../styles/colors'

export default function ActionButton({negative, title, onClicked}) {
    const btnStyle = StyleSheet.create({
        btn: {
            padding: 20,
            color: 'white',
            backgroundColor: negative ? colors.colorNegative : colors.colorPositive
        }
    })

    return (
        <Button 
            style={btnStyle.btn}
            title={title}
            color={negative ? colors.colorNegative : colors.colorPositive}></Button>
    )
}