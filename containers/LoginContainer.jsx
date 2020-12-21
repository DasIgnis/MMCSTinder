import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import {useForm} from 'react-hook-form'

import stylesheet from '../styles/stylesheet'

export default function LoginContainer(props) {
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register('login');
        register('password');
    }, [register])

    const onSubmit = data => {
        if (!data.login || !data.password) {
            Alert.alert('Ошибка', 'Проверьте правильность заполнения формы');
            return;
        }

        props.navigation.reset({
            index: 0,
            routes: [{name: 'usercard'}]
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Логин"
                textContentType="name"
                style={StyleSheet.compose(stylesheet.inputMain, styles.loginInput)}
                onChangeText={text => setValue('login', text)}></TextInput>
            <TextInput
                placeholder="Пароль"
                textContentType="password"
                style={StyleSheet.compose(stylesheet.inputMain, styles.loginInput)}
                secureTextEntry={true}
                onChangeText={text => setValue('password', text)}></TextInput>
            <Button
                style={stylesheet.btnMain}
                title="Войти"
                onPress={handleSubmit(onSubmit)}></Button>
        </View>
    )
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