import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CommentBox />
        </div>
        <div className="row">
          <CommentList />
        </div>
      </div>
    );
  }
}

export default App;
