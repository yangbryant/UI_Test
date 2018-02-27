import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-param-reassign */
function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  dispatch({});
  return { getState, dispatch, subscribe };
}

function themeReducer(state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue',
      },
    };
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.text,
        },
      };
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color,
        },
      };
    default:
      return state;
  }
}

function renderTitle(newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return;
  console.log('title');
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = newTitle.text;
  titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
  if (newContent === oldContent) return;
  console.log('content');
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = newContent.text;
  contentDOM.style.color = newContent.color;
}

function renderApp(newAppStates, oldAppStates = {}) {
  if (newAppStates === oldAppStates) return;
  console.log('appState');
  renderTitle(newAppStates.title, oldAppStates.title);
  renderContent(newAppStates.content, oldAppStates.content);
}

const store = createStore(themeReducer);
let oldState = store.getState();
store.subscribe(() => {
  const newState = store.getState();
  renderApp(newState, oldState);
  oldState = newState;
});
renderApp(store.getState());

store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' });
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' });

registerServiceWorker();
