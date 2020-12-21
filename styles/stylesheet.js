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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    pill: {
        padding: 4,
        color: 'white',
        margin: 4,
        borderRadius: 10,
        overflow: "hidden"
    },
    pillPositive: {
        backgroundColor: colors.colorPositive
    },
    pillNegative: {
        backgroundColor: colors.colorNegative
    }
})

export default stylesheet