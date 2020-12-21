import React from 'react';
import { Modal, View, StyleSheet, Text, Button, Image, Linking, Alert } from 'react-native';

import stylesheet from '../styles/stylesheet'
import colors from '../styles/colors'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function UserModal({visible, photoUrl, name, desсription, prefs, flaws, vk, tg, onClose}) {
    
    const handleOpen = async (link) => {
        const supported = await Linking.canOpenURL(link);

        if (supported) {
            await Linking.openURL(link);
        } else {
            Alert.alert(`Неверный идентификатор пользователя: ${url}`);
        }
    }
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={stylesheet.centeredView}>
                <ScrollView style={styles.modalView}>

                    {
                        photoUrl &&
                        <Image source={{uri: photoUrl}} style={styles.profileImage}></Image>
                    }

                    <Text style={styles.title}>Имя</Text>
                    <Text style={styles.label}>{name}</Text>

                    <Text style={styles.title}>О себе</Text>
                    <Text style={styles.label}>{desсription}</Text>

                    <Text style={styles.title}>Сильные стороны</Text>
                    <View style={styles.rowView}>
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

                    <Text style={styles.title}>Нуждаюсь в помощи</Text>
                    <View style={styles.rowView}>
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

                    <View style={styles.linksRowView}>
                        {
                            tg &&
                            <TouchableOpacity
                                onPress={() => handleOpen(`https://t.me/${tg}`)}>
                                <Image 
                                    source={{uri: 'https://i.pinimg.com/originals/cf/b0/e3/cfb0e325f5ecfb07166c013014af3d98.jpg'}}
                                    style={styles.link}></Image>
                            </TouchableOpacity>
                        }
                        {
                            vk &&
                            <TouchableOpacity
                                onPress={() => handleOpen(`https://vk.com/${vk}`)}>
                                <Image 
                                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/240px-Vk_Logo.svg.png'}}
                                    style={styles.link}></Image>
                            </TouchableOpacity>
                        }
                    </View>

                    <Button onPress={onClose} title="Закрыть"></Button>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 100,
        alignSelf: 'center'
    },
    rowView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 12
    },
    linksRowView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 12,
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: 'white',
        shadowColor: colors.darkGrey,
        shadowRadius: 20,
        padding: 20,
        margin: 20
    },
    title: {
        color: colors.lightGrey
    },
    label: {
        fontSize: 16,
        marginBottom: 12
    },
    link: {
        width: 40,
        height: 40,
        marginRight: 8
    }
})