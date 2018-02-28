import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { initComments, deleteComment } from '../reducers/comments';

class CommentListContainer extends Component {
  componentWillMount() {
    this.loadComments();
  }

  loadComments() {
    let comments = localStorage.getItem('comments');
    comments = comments ? JSON.parse(comments) : [];
    this.props.initComments(comments);
  }

  handleDeleteComment = (index) => {
    const { comments } = this.props;
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1),
    ];
    localStorage.setItem('comments', JSON.stringify(newComments));
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment} />
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments });
const mapDispatchToProps = dispatch => ({
  initComments: (comments) => {
    dispatch(initComments(comments));
  },
  onDeleteComment: (commentIndex) => {
    dispatch(deleteComment(commentIndex));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);
