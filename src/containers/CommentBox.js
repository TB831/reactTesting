import React, { Component } from 'react';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    }
  }
  
  submitHandler = (e) => {
    e.preventDefault(); // Prevents page from reloading
    
    // Call our action creator
    // And save the comment
    this.setState({ comment: '' });
  }

  render() { 
    return (
      <form onSubmit={this.submitHandler} className="card-panel teal lighten-2">
        <h5 className="grey-text text-darken-3">Create New Comment</h5>
        <div className="input-field">
          <label className="white-text" htmlFor="title">Write something interesting...</label>
          <textarea onChange={(e) => this.setState({ comment: e.target.value })} className="materialize-textarea" />
        </div>
        <div>
          <button className="btn pink z-depth-2">Create</button>
        </div>
      </form>
    );
  }
}
 
export default CommentBox;