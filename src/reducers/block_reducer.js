const BlockReducer = (
    state ={
        blocks: matrix(32)
    },
    action
) => {
    switch(action.type){
        case 'DEACTIVATE_BLOCK':
            state.blocks[action.index] = '◻ '
            return state
        case 'ACTIVATE_BLOCK':
            state.blocks[action.index] = '◼ '
            return state
        default:
            return state 
    }
}

const matrix = (number) => {
    let ary = []
    for(let i = 0; i < number; i++){
        let subAry = []
        for(let j = 0; j < number; j++){
            subAry.push('◻ ')
        }
        ary.push(subAry)
    }
    console.log(ary)
    return ary
}

export default BlockReducer