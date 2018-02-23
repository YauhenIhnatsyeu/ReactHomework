import { combineReducers } from 'redux';
import button from './button';
import app from './appReducer';

export default combineReducers({
    button,
    app
});