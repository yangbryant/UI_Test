import React, { Component } from 'react';
import './CommentInput.css';

class ComponentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: '',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      const key = Date.parse(new Date()) / 1000;
      this.props.onSubmit({ username, content, key });
    }
    this.setState({
      content: '',
    });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名:</span>
          <div className="comment-field-input">
            <input value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容:</span>
          <div className="comment-field-input">
            <textarea value={this.state.content} onChange={this.handleContentChange} />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
}

export default ComponentInput;
