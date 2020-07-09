const BlockReducer = (
    state ={
        blocks: matrix(32)
    },
    action
) => {
    switch(action.type){
        case 'CHECK':
            let newBlks = [];
            state.blocks.map((blkRw,indx) => {
                let row = [];
                blkRw.map((blk, indx2) => {
                    let upper = [indx - 1, indx, indx + 1];
                    let lower = [indx2 - 1, indx, indx + 1];
                    let count = 0;
                    for(let i = 0; i < 3; i++){
                        for(let j = 0; j < 3; j++){
                            if(i === 1 && j === 1 ){
                                continue
                            }
                            else{
                                let first  = upper[i]
                                let second = lower[j]
                                if(state.blocks[first][second] === '◼ ')
                                    count++
                            }
                        }
                    }    
                    if (blk === '◻ '){       
                        if(count >=3){
                            blk =  '◼ '
                        }
                        else{
                            blk = '◻ '
                        }
                    }
                    else{
                        if(count == 2 || count ==3 ){
                            blk =  '◼ '
                        }
                        else{
                            blk =  '◻ '
                        }  
                    }
                    row.push(blk)    
                })
                newBlks.push(row)
            })
           
            return {
                blocks: newBlks
            }
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