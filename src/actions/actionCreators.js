import {actionTypes} from './actionTypes';

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