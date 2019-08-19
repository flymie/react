import routes from '../../app/routes/index';
import store from '../../app/createStore';

module.exports = {
  'GET /home/list2': routes.find(v => v.path === '/home/list2').component.WrappedComponent.asyncData(store),
  'GET /error': '',
  'GET /error/test/test': '',
};
