import React, {Component} from 'react';
import { connect } from 'react-redux';
import Block from '../components/Block';
class Blocks extends Component{
    render(){
        return(
            <div>
                {this.props.blocks.map( (indx, block) => <Block key={indx} active={block}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        blocks: state.blocks
    })
}

export default connect(mapStateToProps)(Blocks)