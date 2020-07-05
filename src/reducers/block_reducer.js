const BlockReducer = (
    state ={
        blocks: []
    },
    action
) => {
    switch(action.type){
        case 'ADD_BLOCK':
            let newBlocks = [...state.blocks, action.block]
            return state
        case 'DEACTIVATE_BLOCK':
            let blockIndx = state.blocks.findIndex(bl => bl.id === action.block.id)
            state.blocks[blockIndx].active = false

            return state
        case 'ACTIVATE_BLOCK':
            let blockIndx = state.blocks.findIndex(bl => bl.id === action.block.id)
            state.blocks[blockIndx].active = true
            
            return state
        default:
            return state 
    }
}