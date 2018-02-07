import React, { Component } from 'react';
import Comment from './Comment';
import './CommentList.css';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  }
  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <Comment comment={comment} key={comment.key} />
        ))}
      </div>
    );
  }
}

export default CommentList;
