import React, {useEffect} from 'react';
import Block from './Block';
const Blocks = (props) => {
    useEffect(() => {
        const interval = setInterval(() => {
            props.chngFunction()
          }, 50);
          return () => clearInterval(interval);
    }, []);
    return(
        <div className='blocks'>
            {props.blcks.map(b => <Block blck={b} />)}
        </div>
    )
}

export default Blocks