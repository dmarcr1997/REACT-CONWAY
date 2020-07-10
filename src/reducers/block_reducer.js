const BlockReducer = (
    state ={
        blocks: matrix(100)
    },
    action
) => {
    switch(action.type){
        case 'CHECK':
            let newBlks = []
            state.blocks.map((blkRw,indx) => {
                let row = [];
                blkRw.map((blk, indx2) => {
                    let plus
                    let minus
                    let plus2
                    let minus2
                    if (indx === 99) plus = 0;
                    else plus = indx +1
                    if (indx === 0) minus = 99;
                    else minus = indx -1
                    if (indx2 === 99) plus2 = 0;
                    else plus2 = indx2 +1
                    if (indx2 === 0) minus2 = 99;
                    else minus2 = indx2 -1
                    
                    let upper = [minus, indx, plus];

                    let lower = [minus2, indx2, plus2];
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
                            blk = '◼ '
                        }
                        else{
                            blk = '◻ '
                        }
                    }
                    else{
                        if(count === 2 || count === 3 ){
                            blk = '◼ '

                        }
                        else{
                            blk = '◻ '
                        }  
                    }
                    count = 0;
                    row.push(blk)
                    return blk    
                })
                newBlks.push(row)
                return row 
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
        let count = 0;
        for(let j = 0; j < number; j++){
            if(count === 5|| count === 2){
                subAry.push('◼ ')
                count = 0
            }
            else{
                subAry.push('◻ ')
                count++
            }
        }
        ary.push(subAry)
    }
    return ary
}

export default BlockReducer