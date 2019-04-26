import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes/index';
import '../static/css/index.less';


ReactDom.render(
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
  </BrowserRouter>,
  document.getElementById('root'),
);