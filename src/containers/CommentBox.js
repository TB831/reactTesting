import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    }
  }

  onCreateClick = () => {
    // Call our action creator
    // And save the comment
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  onFetchClick = () => {
    this.props.fetchComments();
  }

  render() { 
    return (
      <form onSubmit={(e) => e.preventDefault()} className="card-panel teal lighten-2">
        <h5 className="grey-text text-darken-3">Create New Comment</h5>
        <div className="input-field">
          <label className="white-text" htmlFor="title">Write something interesting...</label>
          <textarea onChange={(e) => this.setState({ comment: e.target.value })} value={this.state.comment} className="materialize-textarea" />
        </div>
        <div>
          <button onClick={this.onCreateClick} className="btn pink z-depth-2">Create</button>
          <button onClick={this.onFetchClick} className="fetch-comments btn red z-depth-2 right">Fetch Comments</button>
        </div>
      </form>
    );
  }
}
 
export default connect(null, actions)(CommentBox);