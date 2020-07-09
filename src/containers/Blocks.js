import React, {Component} from 'react';
import { connect } from 'react-redux';
import Block from '../components/Block';
import React, { useState, useEffect } from 'react';
class Blocks extends Component{
    renderBlocks = () => {
        return this.props.blocks.map(i =>{
            return i.map((block, indx) => 
            {    
                if(indx < 31)
                    return (<Block key={indx} blck={block}/>)
                else
                    return (<><Block key={indx} blck={block}/><br/></>)
            })    
        })
    }
    render(){
        this.props.initU()
        return(
            <div>
                {this.renderBlocks()}
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
        initU: () => dispatch({type: 'INIT'})
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Blocks)