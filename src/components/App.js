import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Display from './Display';
import getDogStuff from '../actions/userActions';

// WEBSOCKET STUFF
// We will move this shit to a Redux action once we're ready
import io from 'socket.io-client';
const socketUrl = "http://10.164.181.225:5000/"

class App extends Component {

    state = {
      socket: null
    }

componentDidMount = () =>{
  this.props.getDogStuff()
}

    // We will move this shit to a Redux action once we're ready
    // intiSocket = () => {
    //     const socket = io(socketUrl)
    //     this.setState({socket})
    // }

    render() {
        return (
            <div>
                <Input />
                <Display />
            </div>
        );
    }
};


export default connect(App);
