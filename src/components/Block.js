import React from 'react';

const Block = (props) => {
    let renderBlock = () => {
        if (props.active)
            return(<div class='black-block'></div>)
        else
            return(<div class='white-block'></div>)
    }
    return(
        <>
            {renderBlock}
        </>
    )
}