import {actionTypes} from './actionTypes';

export function getAddCity(city) {
    return {
        type: actionTypes.ADD_CITY,
        payload: city
    };
}

export function getChangeCity(city) {
    return {
        type: actionTypes.CHANGE_CITY,
        payload: city
    };
}

export function getChangeGenerated(generated) {
    return {
        type: actionTypes.CHANGE_GENERATED,
        payload: generated
    };
}