import React, { Component } from 'react';
import Input from './Input';
import Display from './Display';


// REDUX STUFF
import { connect } from 'react-redux';
import * as actions from '../actions/dogAction';
// THIS ^ GETS THE DOG ACTION SO WE CAN CALL IT IN THE componentDidMount


// WEBSOCKET STUFF
// We will move this shit to a Redux action once we're ready
// import io from 'socket.io-client';
// const socketUrl = "http://10.164.181.225:5000/"

class App extends Component {

    // state = {
    //   socket: null
    // }
    // We will move this shit to a Redux action once we're ready
    // intiSocket = () => {
    //     const socket = io(socketUrl)
    //     this.setState({socket})
    // }


    componentDidMount = () => {
      this.props.getDogStuff()
    }

    render() {
      console.log(this.props.dog_data);
                  // DOG IMG URL ^ 
        return (
            <div>
                <Input />
                <Display />
                <img alt="DOG PIC" src={this.props.dog_data}></img>
            </div>
        );
    }
};

const mapStateToProps = ( state ) => ({
  dog_data: state.dog_data.message
});
// GRAB DOG IMG FROM STORE ^




export default connect(
  mapStateToProps,
  actions
)(App);

// THIS ^ connect allows us to grab the actions and later mapStateToProps and mapDispatchToProps
