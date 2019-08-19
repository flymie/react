import Container from '../component/error/view';
import ErrorTT2 from '../component/error/test/test/view';

const error = [
  {
    exact: true,
    path: '/error',
    component: Container,
  },
  {
    exact: true,
    path: '/error/test/test',
    component: ErrorTT2,
  },
];

export default error;
