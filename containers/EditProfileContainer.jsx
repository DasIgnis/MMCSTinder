import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash'
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import colors from '../styles/colors'
import stylesheet from '../styles/stylesheet'
import { actionEditProfile } from '../store/actions/actionCreators'

import LabeledInput from '../components/LabeledInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EditProfileContainer(props) {
    const dispatch = useDispatch();

    const TECH_OPTIONS = useSelector(state => state.technologies);
    const PROFILE = useSelector(state => state.profile);

    const [selectedPrefs, setSelectedPrefs] = useState(PROFILE.prefs);
    const [selectedCons, setSelectedCons] = useState(PROFILE.flaws);
    const [name, setName] = useState(PROFILE.name);
    const [description, setDescription] = useState(PROFILE.description);
    const [vkUid, setVkUid] = useState(PROFILE.vkUid);
    const [tgUid, setTgUid] = useState(PROFILE.tgUid);
    const [profileImage, setProfileImage] = useState(PROFILE.imgURI.length > 0 ? {localUri: PROFILE.imgURI} : null);
    
    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        
        if (pickerResult.cancelled === true) {
            return;
        }
      
        setProfileImage({ localUri: pickerResult.uri });
      }

    const onSubmit = () => {
        dispatch(actionEditProfile({
            name: name,
            description: description,
            prefs: selectedPrefs,
            flaws: selectedCons,
            vkUid: vkUid,
            tgUid: tgUid,
            imgURI: profileImage === null ? '' : profileImage.localUri
        }))

        props.navigation.reset({
            index: 0,
            routes: [{name: 'usercard'}]
        });
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.avatarContainer}>
                {
                profileImage === null
                ?   <Text style={styles.addBtnLabel}>+</Text>    
                :   <Image source={{uri: profileImage.localUri}}
                                style={styles.avatarContainer}></Image>
                }
            </TouchableOpacity>
            
            <LabeledInput
                label="Имя"
                placeholder="Имя"
                value={name}
                onChange={value => setName(value)}></LabeledInput>

            <LabeledInput
                label="Дополнительная информация"
                placeholder=""
                multiline={true}
                value={description}
                onChange={value => setDescription(value) }></LabeledInput>

            <SelectBox
                containerStyle={styles.multiselect}
                label="Мои сильные стороны"
                labelStyle={stylesheet.labelMain}
                options={TECH_OPTIONS}
                selectedValues={selectedPrefs}
                onMultiSelect={(item) => setSelectedPrefs(xorBy(selectedPrefs, [item], 'id'))}
                isMulti
                arrowIconColor={colors.darkGrey}
                searchIconColor={colors.darkGrey}
                toggleIconColor={colors.darkGrey}
                multiOptionContainerStyle={styles.multioptionPill}></SelectBox>

            <SelectBox
                containerStyle={styles.multiselect}
                label="Нужна помощь по предметам"
                labelStyle={stylesheet.labelMain}
                options={TECH_OPTIONS}
                selectedValues={selectedCons}
                onMultiSelect={(item) => setSelectedCons(xorBy(selectedCons, [item], 'id'))}
                isMulti
                arrowIconColor={colors.darkGrey}
                searchIconColor={colors.darkGrey}
                toggleIconColor={colors.darkGrey}
                multiOptionContainerStyle={styles.multioptionPill}></SelectBox>

            <Button 
                title="Сохранить"
                onPress={() => onSubmit()}></Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 28
    },
    multiselect: {
        marginBottom: 16
    },
    avatarContainer: {
        backgroundColor: colors.lightGrey,
        borderRadius: 100,
        width: 150,
        height: 150,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    addBtnLabel: {
        alignSelf: 'center',
        fontSize: 60,
        color: 'white'
    },
    multioptionPill: {
        backgroundColor: colors.colorMain
    }
})