import {actionTypes} from './actionTypes';

export function getAddCity(city) {
    return {
        type: actionTypes.ADD_CITY,
        payload: city
    };
}