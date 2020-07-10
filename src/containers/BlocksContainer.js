import React, {Component} from 'react';
import { connect } from 'react-redux';
import Blocks from '../components/Blocks';
class BlocksContainer extends Component{
    checkBlocks = () => {
        this.props.checkBl()
    }

    render(){
        this.props.initU()
        
        return(
            <div>
                <Blocks blcks={this.props.blocks} chngFunction={this.checkBlocks}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        blocks: state.blocks
    })
}
const mapDispatchToProps = dispatch => {
    return{
        initU: () => dispatch({type: 'INIT'}),
        checkBl: () => dispatch({type: 'CHECK'})
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(BlocksContainer)