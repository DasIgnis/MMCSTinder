import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash'

import colors from '../styles/colors'
import stylesheet from '../styles/stylesheet'

import LabeledInput from '../components/LabeledInput';

const TECH_OPTIONS = [
    {
        id: 1,
        item: 'Веб-разработка'
    },
    {
        id: 2,
        item: 'Машинное обучение'
    },
    {
        id: 3,
        item: 'Компьютерное зрение'
    },
    {
        id: 4,
        item: 'Геймдизайн'
    },
    {
        id: 5,
        item: 'Компиляторы'
    },
    {
        id: 6,
        item: 'Unity'
    },
    {
        id: 7,
        item: 'C#'
    },
    {
        id: 8,
        item: 'Английский язык'
    },
    {
        id: 9,
        item: 'Проектная деятельность'
    }
];

export default function EditProfileContainer(props) {
    const [selectedPrefs, setSelectedPrefs] = useState([]);
    const [selectedCons, setSelectedCons] = useState([]);

    function saveProfile() {
        props.navigation.reset({
            index: 0,
            routes: [{name: 'usercard'}]
        });
    };

    return (
        <View style={styles.container}>
            <LabeledInput
                label="Фамилия"
                placeholder="Фамилия"></LabeledInput>

            <LabeledInput
                label="Имя"
                placeholder="Имя"></LabeledInput>

            <LabeledInput
                label="Дополнительная информация"
                placeholder=""></LabeledInput>

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
                onPress={() => saveProfile()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 28
    },
    
})