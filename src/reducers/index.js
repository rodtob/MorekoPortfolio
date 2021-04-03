import isOpenReducer from './isOpen';
import rotar from './rotar';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isOpen: isOpenReducer,
    rotar:rotar
})


export default allReducers