import React from 'react'
import { View, Text, Button } from 'react-native'

import UserCard from '../components/UserCard'

export default function UserCardContainer(props) {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <Button title="Профиль" onPress={() => props.navigation.navigate('profile')}></Button>
            ),
            headerLeft: () => {
                <Button title="Сохраненное" onPress={() => {/*todo: navigate to saved list*/}}></Button>
            }
        })
    })
    
    return (
        <View>
            <UserCard
                name="Вася Пупкин"
                description="Люблю плясать и веселиться"></UserCard>
        </View>
    )
}