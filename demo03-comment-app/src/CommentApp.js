import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentApp.css';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentWillMount() {
    this.loadComments();
  }

  loadComments() {
    let comments = localStorage.getItem('comments');
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({
        comments,
      });
    }
  }

  /* eslint-disable class-methods-use-this */
  saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
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
    this.saveComments(commentArray);
  }

  handleDeleteComment = (index) => {
    console.log(index);
    const commentArray = this.state.comments;
    commentArray.splice(index, 1);
    this.setState({
      comments: commentArray,
    });
    this.saveComments(commentArray);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} />
      </div>
    );
  }
}

export default CommentApp;
