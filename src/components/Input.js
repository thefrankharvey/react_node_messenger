import React from 'react';
import {data} from '../dummyData.json';

class Input extends React.Component {
   
  render() {
    console.log(data.message)
      return (
      <div className="input-container">
      <label>Message:&nbsp;</label>
      <textarea placeholder="text here"></textarea>
      <button>Send</button>
      </div>
      )
  }
};

export default Input;