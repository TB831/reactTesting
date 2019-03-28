import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments = () => {
    return this.props.comments.map(comment => {
      return <li className="collection-item" key={comment}>{comment}</li>
    });
  }

  render() { 
    return (
      <ul className="collection">
        {this.renderComments()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
 
export default connect(mapStateToProps)(CommentList);