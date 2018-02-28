import React, { Component } from 'react';
import '../css/Comment.css';

const moment = require('moment');

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      timeString: '',
    };
  }

  componentWillMount() {
    this.updateTimeString();
    this.timer = setInterval(
      this.updateTimeString,
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getProcessedContent = content => content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/`([\S\s]+?)`/g, '<code>$1</code>');

  updateTimeString = () => {
    const duration = moment(this.props.comment.key, 'x').fromNow();
    this.setState({
      timeString: duration,
    });
  }

  handleDeleteComment = () => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <div className="comment-user">
          <span className="comment-username">{comment.username}</span>:
        </div>
        <p dangerouslySetInnerHTML={{ __html: this.getProcessedContent(comment.content) }} />
        <span className="comment-createdtime">{this.state.timeString}</span>
        <span className="comment-delete" onClick={this.handleDeleteComment} role="button" tabIndex="0" onKeyPress={() => {}}>删除</span>
      </div>
    );
  }
}

export default Comment;
