const rotar = (state = 0, action)=>{
    switch(action.type){
        case 'ROTAR_KNOB':
            return state > 0 ?  state - 4 : state;
    
        case 'DESROTAR_KNOB':
            return state < 100 ?  state + 4 : state;
        
        default:
            return state;
    }
}

export default rotar;