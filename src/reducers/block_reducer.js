const BlockReducer = (
    state ={
        blocks: []
    },
    action
) => {
    switch(action.type){
        case 'ADD_BLOCK':
            console.log(action.block)
            return state
        case 'DEACTIVATE_BLOCK':
            console.log(action.block)
            return state
        case 'ACTIVATE_BLOCK':
            console.log(action.block)
            return state
        default:
            return state 
    }
}