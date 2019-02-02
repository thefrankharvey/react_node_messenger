import React, { Component } from "react";
import Input from "./components/Input";
import Display from "./components/Display";
import io from "socket.io-client";

// REDUX STUFF
import { connect } from "react-redux";
import * as actions from "./actions/dogAction";
// THIS ^ GETS THE DOG ACTION SO WE CAN CALL IT IN THE componentDidMount

class App extends Component {
  state = {
    socket: null
  };

  componentDidMount = () => {
    this.props.getDogStuff();
  };

  render() {
    return (
      <div>
        <Input />
        <Display />
        <img alt="DOG PIC" src={this.props.dog_data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dog_data: state.dog_data.message
});
// GRAB DOG IMG FROM STORE ^

export default connect(
  mapStateToProps,
  actions
)(App);

// THIS ^ connect allows us to grab the actions and later mapStateToProps and mapDispatchToProps
