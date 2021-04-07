import isOpenReducer from './isOpen';
import rotar from './rotar';
import activeSiteReducer from './activeSite';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isOpen: isOpenReducer,
    rotar:rotar,
    activeSite: activeSiteReducer
})


export default allReducers