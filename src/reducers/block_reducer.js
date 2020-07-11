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
            subAry.push('◻ ')
            count++
        }
        ary.push(subAry)
    }
    ary[55][55] = '◼ ';
    ary[54][54] = '◼ ';
    ary[54][55] = '◼ ';
    ary[54][56] = '◼ ';
    ary[53][54] = '◼ ';
    ary[53][55] = '◼ ';
    ary[53][56] = '◼ ';
    ary[52][54] = '◼ ';
    ary[52][56] = '◼ ';
    
    ary[25][55] = '◼ ';
    ary[24][54] = '◼ ';
    ary[24][55] = '◼ ';
    ary[24][56] = '◼ ';
    ary[23][54] = '◼ ';
    ary[23][55] = '◼ ';
    ary[23][56] = '◼ ';
    ary[22][54] = '◼ ';
    ary[22][56] = '◼ ';
    
    ary[25][30] = '◼ ';
    ary[25][29] = '◼ ';
    ary[23][29] = '◼ ';
    ary[26][29] = '◼ ';
    ary[23][28] = '◼ ';
    ary[26][28] = '◼ ';
    ary[23][27] = '◼ ';
    ary[26][27] = '◼ ';
    
    ary[10][30] = '◼ ';
    ary[10][29] = '◼ ';
    ary[9][29] = '◼ ';
    ary[11][29] = '◼ ';
    ary[9][28] = '◼ ';
    ary[11][28] = '◼ ';
    ary[9][27] = '◼ ';
    ary[11][27] = '◼ ';

    ary[66][30] = '◼ ';
    ary[66][29] = '◼ ';
    ary[66][28] = '◼ ';
    ary[65][29] = '◼ ';
    ary[65][28] = '◼ ';
    ary[65][27] = '◼ ';
    ary[64][29] = '◼ ';
    ary[64][28] = '◼ ';
    ary[64][27] = '◼ ';
    
    return ary
}

export default BlockReducer