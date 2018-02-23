import {actionTypes} from './actionTypes';

export function getAddCity(city) {
    return {
        type: actionTypes.ADD_CITY,
        payload: city
    };
}

export function getChangeCurrentCity(city) {
    return {
        type: actionTypes.CHANGE_CURRENT_CITY,
        payload: city
    };
}

export function getChangeGenerated(generated) {
    return {
        type: actionTypes.CHANGE_GENERATED,
        payload: generated
    };
}