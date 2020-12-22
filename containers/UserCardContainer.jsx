import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import UserCard from '../components/UserCard'
import { useSelector, useDispatch } from 'react-redux'
import { actionAddToFavourite } from '../store/actions/actionCreators'
import { createSelector } from 'reselect'

const usersSelector = createSelector(
    state => { 
        let users = state.users.filter(x => !state.favs.includes(x.id));

        users.sort(a => {
            a.flaws.filter(x => state.profile.prefs.includes(x)).length 
                                + a.prefs.filter(x => state.profile.flaws.includes(x))
        })

        return [...users];
    },
    users => [...users]
)

const technologiesSelector = createSelector(
    state => state.technologies,
    technologies => technologies
)

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

    const dispatch = useDispatch();

    const [currentCard, setCurrentCard] = useState(null);
    
    const users = useSelector(usersSelector);
    const technologies = useSelector(technologiesSelector);

    console.log(users.map(x=>x.id))

    useEffect(() => {
        setCurrentCard(users.length > 0 ? users[0] : null);
        users.splice(0, 1);
    }, []);

    function techById(id) {
        const index = technologies.findIndex(x => x.id === id);
        if (index !== -1) {
            return technologies[index].item
        } else {
            return ''
        }
    }

    function nextCard() {
        if (users.length > 0) {
            console.log('next card');
            setCurrentCard(users[0]);
            users.splice(0, 1);
        } else {
            setCurrentCard(null);
        }
    }

    function fav(id) {
        console.log(`faved ${id}`)
        dispatch(actionAddToFavourite(id));
        nextCard();
    }
    
    return (
        <View>
            {
                currentCard
                ? <UserCard
                    name={currentCard.name}
                    description={currentCard.description}
                    profileUrl={currentCard.photoUrl}
                    prefs={currentCard.prefs.map(x => techById(x))}
                    flaws={currentCard.flaws.map(x => techById(x))}
                    vkUid={currentCard.vkUid}
                    tgUid={currentCard.tgUid}
                    onDiscard={() => nextCard()}
                    onFav={() => fav(currentCard.id)}></UserCard>
                : <Text style={styles.finished}>
                    Поздравляем! Вы так отчаялись, что просмотрели профили всех пользователей
                </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    finished: {
        marginTop: 50,
        marginHorizontal: 30,
        textAlign: 'center'
    }
})