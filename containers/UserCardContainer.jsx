import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import UserCard from '../components/UserCard'
import { useSelector, useDispatch, connect } from 'react-redux'
import { actionAddToFavourite } from '../store/actions/actionCreators'
import { createSelector } from 'reselect'

import firebase from '../firebase'

const mapStateToProps = (state) => {
    return {
      users: state.users,
      technologies: state.technologies
    }
  }

const technologiesSelector = createSelector(
    state => state.technologies,
    technologies => technologies
)

function UserCardContainer(props) {
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
    const profile = useSelector(state => state.profile)

    console.log(props.users.map(x=>x.id))

    useEffect(() => {
        //const db = firebase.firestore().collection('profiles');
        props.users.sort(a => a.flaws.filter(x => profile.prefs.includes(x)).length 
                        + a.prefs.filter(x => profile.flaws.includes(x)))
        setCurrentCard(props.users.length > 0 ? props.users[0] : null);
        props.users.splice(0, 1);
    }, []);

    function techById(id) {
        const index = props.technologies.findIndex(x => x.id === id);
        if (index !== -1) {
            return props.technologies[index].item
        } else {
            return ''
        }
    }

    function nextCard() {
        if (props.users.length > 0) {
            console.log('next card');
            setCurrentCard(props.users[0]);
            props.users.splice(0, 1);
        } else {
            setCurrentCard(null);
        }
    }

    function fav(card) {
        dispatch(actionAddToFavourite(card));
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
                    onFav={() => fav(currentCard)}></UserCard>
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

export default connect(mapStateToProps)(UserCardContainer)