import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      img: '',
      content: ''
    }
  }

  render() {
    return (
      <div>
        Form
          <Nav />
      </div>
    );
  }
}

export default Form;