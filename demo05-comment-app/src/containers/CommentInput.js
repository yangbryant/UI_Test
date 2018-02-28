import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentInput from '../components/CommentInput';
import { addComment } from '../reducers/comments';

class CommentInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  componentWillMount() {
    this.loadUsername();
  }

  loadUsername() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({ username });
    }
  }

  saveUsername = (username) => {
    localStorage.setItem('username', username);
  }

  handleSubmitComment = (comment) => {
    if (!comment) return;
    if (!comment.username) return;
    if (!comment.content) return;
    const { comments } = this.props;
    const newComments = [...comments, comment];
    localStorage.setItem('comments', JSON.stringify(newComments));
    if (this.props.onSubmit) {
      this.props.onSubmit(comment);
    }
  }

  render() {
    return (
      <CommentInput
        username={this.state.username}
        onUserNameInputBlur={this.saveUsername}
        onSubmit={this.handleSubmitComment}
      />
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments });
const mapDispatchToProps = dispatch => ({
  onSubmit: (comment) => {
    dispatch(addComment(comment));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer);
