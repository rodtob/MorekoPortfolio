const isOpenReducer = (state, action)=>{
    switch(action.type){
        case 'TOGGLE_MENU':
            return !state;
        default:
            return false;
    }
}

export default isOpenReducer;