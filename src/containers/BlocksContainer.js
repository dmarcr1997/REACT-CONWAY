import React, {Component} from 'react';
import { connect } from 'react-redux';
import Blocks from '../components/Blocks';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Jumbotron } from 'react-bootstrap';
class BlocksContainer extends Component{
    state = {
        start: false
    }
    checkBlocks = () => {
        this.props.checkBl()
    }

    renderBlocks = () => {
        if (this.state.start === true){
            return(
                <Container>
                    <Button className='stopButton' onClick={() => {
                        this.setState({
                            start: false
                        })
                    }} variant="success">Stop Game</Button>{' '}
                    <Blocks blcks={this.props.blocks} chngFunction={this.checkBlocks}/>
                </Container>
            )
        }
        else
            return(
            <Jumbotron>
                <h2>Hello Welcome to Conway's Game of Life</h2>
                <p>There are four rules to this game</p>
                <p>1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.</p>
                <p>2. Any live cell with two or three live neighbours lives on to the next generation.</p>
                <p>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
                <p>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>   
                <Button className='startButton' onClick={() => {
                            this.setState({
                                start: true
                            })
                }} variant="success">Start Game</Button>{' '}
            </Jumbotron>)
    }
    render(){
        this.props.initU()
        
        return(
            <Jumbotron>
                {this.renderBlocks()}
            </Jumbotron>
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