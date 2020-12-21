import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import stylesheet from '../styles/stylesheet'

export default function LabeledInput({label, value, onChange, placeholder, multiline}) {
    return (
        <View>
            <Text style={stylesheet.labelMain}>{label}</Text>
            <TextInput 
                style={StyleSheet.compose(stylesheet.inputMain, {marginBottom: 16})}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                multiline={multiline}></TextInput>
        </View>
    )
}