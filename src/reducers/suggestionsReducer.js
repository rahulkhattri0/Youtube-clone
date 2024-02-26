export function suggestionsReducer(state,action){
    const {type,payload:suggestionsLength} = action
    switch (type) {
        case 'next':
            return state===suggestionsLength-1 ? state : state+1
        case 'prev':
            return state===0 ? state : state-1
        case 'reset':
            return -1;
        default:
    }
}