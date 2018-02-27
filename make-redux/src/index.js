import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-param-reassign */
function createStore(state, stateChanger) {
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = { ...stateChanger(state, action) };
    listeners.forEach(listener => listener());
  };
  return { getState, dispatch, subscribe };
}

const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue',
  },
};

function stateChanged(state, action) {
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

const store = createStore(appState, stateChanged);
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
