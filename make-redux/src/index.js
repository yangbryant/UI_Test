import registerServiceWorker from './registerServiceWorker';

function createStore(state, stateChanger) {
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    stateChanger(state, action);
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
      appState.title.text = action.text;
      break;
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color;
      break;
    default:
      break;
  }
}

function renderTitle(title) {
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}

function renderContent(content) {
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}

function renderApp(appStates) {
  renderTitle(appStates.title);
  renderContent(appStates.content);
}

const store = createStore(appState, stateChanged);
store.subscribe(() => renderApp(store.getState()));
renderApp(store.getState());

store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' });
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' });

registerServiceWorker();
