import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Main from './containers/Main';
import Qwerty from './containers/Qwerty';
import SSE from './containers/SSE';


export default (store) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(store);
  }
  function requireAuth(nextState, replaceState) {
    const loggedIn = store.getState().users.viewer;
    if (!loggedIn) {
      replaceState({nextPathname: nextState.location.pathname}, '/login');
    }
  }
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="qwerty" component={Qwerty} onEnter={requireAuth} />
      <Route path="sse" component={SSE} onEnter={requireAuth} />
    </Route>
    );
};
