import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import colors from '../styles/colors'
import stylesheet from '../styles/stylesheet'

export default class WelcomeContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Добро пожаловать!</Text>
                <Button 
                    style={stylesheet.btnMain} 
                    title="Войти"
                    onPress={() => {this.props.navigation.navigate('login')}}></Button>
                <Button 
                    style={stylesheet.btnMain} 
                    title="Зарегистрироваться"
                    onPress={() => {this.props.navigation.navigate('register')}}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: colors.textMain,
        fontSize: 18,
        marginBottom: 28
    }
})