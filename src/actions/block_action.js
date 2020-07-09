export const checkBlocks = () => {
    return (dispatch) => {
        return dispatch({type: 'CHECK'})
    }
}

export const initCanv = () => {
    return (dispatch) => {
        return dispatch({type: 'INIT'})
    }
}