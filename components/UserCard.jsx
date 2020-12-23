import React, {useEffect, useRef} from 'react'
import { View, StyleSheet, Text, Image, ScrollView, Linking, Alert, Animated } from 'react-native'
import ActionButton from './ActionButton'

import stylesheet from '../styles/stylesheet'
import colors from '../styles/colors'
import UserCardProfileLink from './UserCardProfileLink'

export default function UserCard({profileUrl, name, description, prefs, flaws, vkUid, tgUid, onFav, onDiscard}) {

    const handleOpen = async (link) => {
        const supported = await Linking.canOpenURL(link);

        if (supported) {
            await Linking.openURL(link);
        } else {
            Alert.alert(`Неверный идентификатор пользователя: ${url}`);
        }
    }
    
    return (
        <View style={styles.card}>
            <ScrollView style={styles.profileInfo}>
                <Image source={{uri: profileUrl}} style={styles.profImg}></Image>

                <Text style={styles.name}>{name}</Text>

                <View style={styles.contactsRow}>
                    {
                        vkUid &&
                        <UserCardProfileLink
                            img='https://i.pinimg.com/originals/cf/b0/e3/cfb0e325f5ecfb07166c013014af3d98.jpg'
                            uid={vkUid}
                            onNavigate={() => handleOpen(`https://t.me/${tgUid}`)}></UserCardProfileLink>
                    }
                    {
                        tgUid &&
                        <UserCardProfileLink
                            img='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/240px-Vk_Logo.svg.png'
                            uid={tgUid}
                            onNavigate={() => handleOpen(`https://vk.com/${vkUid}`)}></UserCardProfileLink>
                    }
                </View>

                <Text>{description}</Text>

                <Text style={styles.smallLabel}>Сильные стороны</Text>
                <View style={styles.pillsRow}>
                    {
                        prefs &&
                        prefs.map(x => (
                            <Text 
                                key={x} 
                                style={StyleSheet.compose(stylesheet.pillPositive, stylesheet.pill)}>
                                {x}
                            </Text>
                        ))
                    }
                </View>

                <Text style={styles.smallLabel}>Нуждаюсь в помощи</Text>
                <View style={styles.pillsRow}>
                    {
                        flaws &&
                        flaws.map(x => (
                            <Text
                                key={x}
                                style={StyleSheet.compose(stylesheet.pillNegative, stylesheet.pill)}>
                                {x}
                            </Text>
                        ))
                    }
                </View>
            </ScrollView>

            <View style={styles.btnContainer}>
                <View style={styles.btnContainerChild}>
                    <ActionButton 
                        title="✕" 
                        negative={true}
                        onClicked={onDiscard}></ActionButton>
                </View>
                <View style={styles.btnContainerChild}>
                    <ActionButton 
                        title="♥" 
                        negative={false}
                        onClicked={onFav}></ActionButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        width: '100%',
        position: 'relative',
        height: '100%'
    },
    profileInfo: {
        padding: 30
    },
    profImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 8
    },
    contactsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16
    },
    pillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    name: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 8,
        color: colors.darkGrey,
        fontWeight: 'bold'
    },
    smallLabel: {
        color: colors.darkGrey,
        marginTop: 12
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        position: 'absolute',
        bottom: 0
    },
    btnContainerChild: {
        width: '50%'
    }
})