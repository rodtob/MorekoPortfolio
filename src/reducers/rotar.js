const rotar = (state = 0, action)=>{
    switch(action.type){
        case 'ROTAR_KNOB':
            return state > 0 ?  state - 10 : state;
    
        case 'DESROTAR_KNOB':
            return state < 100 ?  state + 10 : state;
        
        default:
            return state;
    }
}

export default rotar;