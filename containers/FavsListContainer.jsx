import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, View } from 'react-native';
import FavsListItem from '../components/FavsListItem';
import UserModal from '../components/UserModal';

export default function FavsListContainer(props) {
    const favs = useSelector(state => state.favs);
    const users = useSelector(state => state.users.filter(x => favs.includes(x.id)));
    const technologies = useSelector(state => state.technologies);

    const [selectedUser, setSelectedUser] = useState({prefs: [], flaws: []});
    const [modalVisible, setModalVisible] = useState(false);

    function getTechName(id) {
        const index = technologies.findIndex(x => x.id === id);
        return index === -1 ? '' : technologies[index].item;
    }

    const showUserData = (user) => {
        setSelectedUser(user);
        console.log(selectedUser);
        setModalVisible(true);
    }

    return (
        <View>
            <UserModal
                visible={modalVisible}
                name={selectedUser.name}
                desсription={selectedUser.description}
                prefs={selectedUser.prefs.map(x => getTechName(x))}
                flaws={selectedUser.flaws.map(x => getTechName(x))}
                photoUrl={selectedUser.photoUrl}
                vk={selectedUser.vkUid}
                tg={selectedUser.tgUid}
                onClose={() => setModalVisible(false)}></UserModal>
            <ScrollView>
                { users.map(user => (
                    <FavsListItem
                        key={user.id}
                        profileUri={user.photoUrl}
                        name={user.name}
                        prefs={user.prefs.map(x => getTechName(x))}
                        flaws={user.flaws.map(x => getTechName(x))}
                        onPress={() => showUserData(user)}></FavsListItem>
                    )) 
                }
            </ScrollView>
        </View>
        
    )
}