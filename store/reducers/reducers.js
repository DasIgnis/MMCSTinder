import {EDIT_PROFILE, ADD_FAV} from '../actions/actionTypes'
import initialState from '../initialState'

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FAV: return {
            ...state,
            favs: [...state.favs, action.value]
        }
        case EDIT_PROFILE: return {
            ...state,
            profile: Object.assign({}, action.value)
        }
        default: return state;
    }
}

export default reducer;