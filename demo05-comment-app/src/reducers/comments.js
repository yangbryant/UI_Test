// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// reducer
export default function (state, action) {
  let curState = state;
  if (!curState) {
    curState = { comments: [] };
  }

  switch (action.type) {
    case INIT_COMMENTS:
      return {
        comments: action.comments,
      };
    case ADD_COMMENT:
      return {
        comments: [
          ...curState.comments,
          action.comment,
        ],
      };
    case DELETE_COMMENT:
      return {
        comments: [
          ...curState.comments.slice(0, action.commentIndex),
          ...curState.comments.slice(action.commentIndex + 1),
        ],
      };
    default:
      return curState;
  }
}

// action creators
export const initComments = comments => ({ type: INIT_COMMENTS, comments });

export const addComment = comment => ({ type: ADD_COMMENT, comment });

export const deleteComment = commentIndex => ({ type: DELETE_COMMENT, commentIndex });
