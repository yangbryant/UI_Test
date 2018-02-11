import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentApp.css';
import WrappedComponent from './WrappedComponent';

const CommentClass = class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data,
    };
  }

  handleSubmitComment = (comment) => {
    if (!comment) return;
    if (!comment.username) return;
    if (!comment.content) return;
    const commentArray = this.state.comments;
    commentArray.push(comment);
    this.setState({
      comments: commentArray,
    });
    this.props.saveData(commentArray);
  }

  handleDeleteComment = (index) => {
    console.log(index);
    const commentArray = this.state.comments;
    commentArray.splice(index, 1);
    this.setState({
      comments: commentArray,
    });
    this.props.saveData(commentArray);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} />
      </div>
    );
  }
};

const CommentApp = WrappedComponent(CommentClass, 'comments');
export default CommentApp;
