import React from 'react'
import { View, Text, Button } from 'react-native'

import UserCard from '../components/UserCard'

export default function UserCardContainer(props) {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                    <Button title="Профиль 👨" onPress={() => props.navigation.navigate('profile')}></Button>
                    <Button title="Избранное ❤️" onPress={() => props.navigation.navigate('favourites')}></Button>
                </View>
            )
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