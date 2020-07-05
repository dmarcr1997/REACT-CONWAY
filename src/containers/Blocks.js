import React, {Component} from 'react';
import { connect } from 'react-redux';
import Block from '../components/Block';
class Blocks extends Component{

}

const mapStateToProps = (state) => {
    return({
        blocks: state.blocks
    })
}

export default connect(mapStateToProps)(Blocks)