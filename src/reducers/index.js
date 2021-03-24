import isOpenReducer from './isOpen';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isOpen: isOpenReducer
})


export default allReducers