import React, {useEffect} from 'react';
import Block from './Block';
const Blocks = (props) => {
    debugger
    useEffect(() => {
        debugger
        const interval = setInterval(() => {
            debugger
            props.chngFunction()
          }, 100);
          return () => clearInterval(interval);
    }, []);
    return(
        <>
            {props.blcks.map(b => <Block blck={b} />)}
        </>
    )
}

export default Blocks