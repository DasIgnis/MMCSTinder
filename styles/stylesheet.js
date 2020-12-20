import { StyleSheet } from "react-native";

import colors from './colors'

const stylesheet = StyleSheet.create({
    btnMain: {
        backgroundColor: colors.colorMain,
        color: colors.white
    },
    inputMain: {
        borderColor: colors.lightGrey,
        padding: 8,
        borderBottomWidth: 1,
        fontSize: 18
    },
    labelMain: {
        color: colors.darkGrey,
        fontSize: 14
    }
})

export default stylesheet