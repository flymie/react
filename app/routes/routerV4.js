import RouterV4 from '../component/routerV4/view';
import URLSearchParamas from '../component/routerV4/uRLSearchParams';

const routerV4 = [
  {
    exact: true,
    path: '/routerV4/:id',
    component: RouterV4,
  },
  {
    exact: true,
    path: '/uRLSearchParams/:id',
    component: URLSearchParamas,
  },
];

export default routerV4;
