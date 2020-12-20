import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import stylesheet from '../styles/stylesheet'

export default class LoginContainer extends React.Component {
    constructor(props){
        super(props)
    }

    performLogin() {
        this.props.navigation.reset({
            index: 0,
            routes: [{name: 'usercard'}]
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Логин"
                    textContentType="name"
                    style={StyleSheet.compose(stylesheet.inputMain, styles.loginInput)}></TextInput>
                <TextInput
                    placeholder="Пароль"
                    textContentType="password"
                    style={StyleSheet.compose(stylesheet.inputMain, styles.loginInput)}></TextInput>
                <Button
                    style={stylesheet.btnMain}
                    title="Войти"
                    onPress={() => { this.performLogin() }}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 28,
        marginLeft: 30,
        marginRight: 30
    },
    loginInput: {
        maxWidth: 300,
        marginBottom: 20,
        width: '100%'
    }
})