import React, { Component } from "react";
import { data } from "../dummyData.json";
import { USER_CONNECTED, LOGOUT } from "../Events";
import io from "socket.io-client";

const socketUrl = "http://10.164.181.225:5000/";

class Input extends React.Component {
  state = {
    socket: null,
    user: null
  };

  componentDidMount = () => {
    this.intiSocket();
  };

  intiSocket = () => {
    const socket = io(socketUrl);
    socket.on("connect", () => {
      console.log("connected");
    });
    this.setState({ socket });
  };

  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({
      user
    });
  };

  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({
      user: null
    });
  };

  render() {
    console.log(data.message);
    return (
      <div className="input-container">
        <label>Message:&nbsp;</label>
        <textarea placeholder="text here" />
        <button>Send</button>
      </div>
    );
  }
}

export default Input;
