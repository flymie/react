import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './createStore';
import routes from './routes/index';
import '../static/css/index.less';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {
          routes.map((v, index) => (
            <Route
              key={`${index + 1}`}
              path={v.path}
              exact={v.exact}
              component={v.component}
            />
          ))
        }
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
