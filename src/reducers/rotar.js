const rotar = (state = 0, action)=>{
    switch(action.type){
        case 'ROTAR_KNOB':
            return state - 10;
    
        case 'DESROTAR_KNOB':
            return state + 10;
        
        default:
            return state;
    }
}

export default rotar;