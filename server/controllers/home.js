import { renderToString } from 'react-dom/server';
import { Route, Switch, StaticRouter } from 'react-router-dom';
import routes from '../../app/routes/index';

const homeFn = async (ctx, next) => {
  console.log(1)
  ctx.body = renderToString(
    <StaticRouter location={ctx.url}>
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
    </StaticRouter>
  );
  next();
};

module.exports = {
  'GET /home/list2': homeFn,
  'GET /error': homeFn,
};
