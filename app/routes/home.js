import Container from '../component/home/list/view';
import List2 from '../component/home/list2/view';

const home = [
  {
    exact: true,
    path: '/',
    component: Container,
  },
  {
    exact: true,
    path: '/home/list2',
    component: List2,
  },
];

export default home;
