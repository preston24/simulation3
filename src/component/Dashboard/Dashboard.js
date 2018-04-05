import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      search: '',
      userPosts: true
    }
  }

  render() {
    return (
      <div>
        Dashboard
          <Nav />
      </div>
    );
  }
}

export default Dashboard;