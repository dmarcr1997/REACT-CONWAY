import React from 'react';

const Block = (props) => {
    let renderBlock = () => {
        if (props.active === 1)
            return(<div class='black-block'></div>)
        else (props.active === 0)
            return(<div class='white-block'></div>)
    }
    return(
        <>
            {renderBlock}
        </>
    )
}