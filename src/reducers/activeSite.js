const activeSiteReducer = (state = '', action)=>{
    switch(action.type){
        case 'DJ':
            return 'dj';
        case 'MIXMASTER':
            return 'mixmaster';
        case 'SDESIGN':
             return 'sdesign';
        case 'COMPOSITIONS':
             return 'compositions';
        case 'MYMUSIC':
             return 'mymusic';
        case 'ABOUTME' :
             return 'aboutme';     

        default:    
            return state;
    }
}

export default activeSiteReducer;