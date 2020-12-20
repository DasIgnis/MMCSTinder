import React from 'react'
import { View, Text, Button } from 'react-native';

export default class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    register() {
        this.props.navigation.reset({
            index: 0,
            routes: [{name: 'profile'}]
        });
    }

    render() {
        return (
            <View>
                <Text>Registration</Text>
                <Button
                    title="Регистрация"
                    onPress={() => {this.register()}}></Button>
            </View>
        )
    }
}