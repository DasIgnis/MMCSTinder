import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import colors from '../styles/colors'
import stylesheet from '../styles/stylesheet'
import { actionEditProfile } from '../store/actions/actionCreators'

import LabeledInput from '../components/LabeledInput';

export default function EditProfileContainer(props) {
    const dispatch = useDispatch();

    const [selectedPrefs, setSelectedPrefs] = useState([]);
    const [selectedCons, setSelectedCons] = useState([]);

    const TECH_OPTIONS = useSelector(state => state.technologies);
    const PROFILE = useSelector(state => state.profile);
    console.log(PROFILE.name)
    
    const { register, handleSubmit, setValue } = useForm();
    //setSelectedPrefs(PROFILE.prefs ? PROFILE.prefs : []);
    //setSelectedCons(PROFILE.flaws ? PROFILE.flaws : []);

    useEffect(() => {
        register({name : PROFILE.name});
        register('description');
    }, [register])

    const onSubmit = data => {
        dispatch(actionEditProfile(data))

        props.navigation.reset({
            index: 0,
            routes: [{name: 'usercard'}]
        });
    };

    return (
        <View style={styles.container}>
            <LabeledInput
                label="Имя"
                placeholder="Имя"
                onChangeText={text => setValue('name', text)}></LabeledInput>

            <LabeledInput
                label="Дополнительная информация"
                placeholder=""
                onChangeText={text => setValue('description', text)}
                multiline={true}></LabeledInput>

            <SelectBox
                label="Мои сильные стороны"
                labelStyle={stylesheet.labelMain}
                options={TECH_OPTIONS}
                selectedValues={selectedPrefs}
                onMultiSelect={(item) => setSelectedPrefs(xorBy(selectedPrefs, [item], 'id'))}
                isMulti
                arrowIconColor={colors.darkGrey}
                searchIconColor={colors.darkGrey}
                toggleIconColor={colors.darkGrey}></SelectBox>

            <Button 
                title="Сохранить"
                onPress={handleSubmit(onSubmit)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 28
    },
    
})