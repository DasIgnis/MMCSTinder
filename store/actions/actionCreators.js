import {EDIT_PROFILE, ADD_FAV} from './actionTypes'

export function actionEditProfile(value) {
    return {
        type: EDIT_PROFILE,
        value: value
    };
}

export function actionAddToFavourite(value) {
    return {
        type: ADD_FAV,
        value: value
    };
}
