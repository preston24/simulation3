import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Post extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      img: '',
      content: '',
      author: '',
      authorPicture: ''
    }
  }

  render() {
    return (
      <div>
        Post
          <Nav />
      </div>
    );
  }
}

export default Post;