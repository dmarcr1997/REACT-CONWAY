const BlockReducer = (
    state ={
        blocks: [[0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0]]
    },
    action
) => {
    switch(action.type){
        case 'DEACTIVATE_BLOCK':
            state.blocks[action.index] = 0
            return state
        case 'ACTIVATE_BLOCK':
            state.blocks[action.index] = 1
            return state
        default:
            return state 
    }
}