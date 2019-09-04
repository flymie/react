// import routes from '../../app/routes/index';
// import store from '../../app/createStore';
import { matchRoutes } from 'react-router-config';

const { store, router } = require('../forSSr').default;

const homeList2 = (ctx) => {
  console.log(ctx.params.a, ctx.url);
  // const branch = matchRoutes(router, ctx.url);
  console.log(router)
  router.find(v => v.path === '/home/list2/:a').component.WrappedComponent.asyncData(store, ctx);
  // store.subscribe(async () => {
  //   ctx.render(store);
  // });
  return new Promise((resolve) => {
    store.subscribe(async () => {
      resolve(store);
    });
  });
  // setTimeout(() => {
  //   console.log(store.getState())
  // }, 2000);
  // return store;
};

module.exports = {
  'GET /home/list2/:a': homeList2,
  'GET /error': '',
  'GET /error/test/test': '',
  'GET /home': '',
};
