import { actionTypes } from "../actions/actionTypes";

const initialState = {
    currentCity: "",
    generated: 0
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_CITY:
            return {...state, currentCity: action.payload};
        case actionTypes.CHANGE_GENERATED:
            return {...state, generated: action.payload};
        default:
            return state;
    }
}