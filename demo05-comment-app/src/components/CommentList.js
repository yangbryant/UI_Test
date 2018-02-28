import React, { Component } from 'react';
import Comment from './Comment';
import '../css/CommentList.css';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  }
  handleDeleteComment = (index) => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => (
          <Comment
            comment={comment}
            key={comment.key}
            index={i}
            onDeleteComment={this.handleDeleteComment}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
