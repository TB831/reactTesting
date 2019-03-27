import React, { Component } from 'react';

class CommentBox extends Component {
  render() { 
    return (
      <div className="row">
        <form className="card-panel teal lighten-2">
          <h5 className="grey-text text-darken-3">Create New Comment</h5>
          <div className="input-field">
            <label htmlFor="title">Write something interesting...</label>
            <textarea className="materialize-textarea" />
          </div>
          <div>
            <btn className="btn pink light-1 z-depth-2">Create</btn>
          </div>
        </form>
      </div>
    );
  }
}
 
export default CommentBox;