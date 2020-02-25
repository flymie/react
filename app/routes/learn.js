import Context from '../component/learn/context/view';
import Ref from '../component/learn/ref/view';
import Protals from '../component/learn/protals/view';
import RenderProp from '../component/learn/renderProp/view';
import Aop from '../component/learn/aop/view';

const learn = [
  {
    exact: true,
    path: '/context',
    component: Context,
  },
  {
    exact: true,
    path: '/ref',
    component: Ref,
  },
  {
    exact: true,
    path: '/protals',
    component: Protals,
  },
  {
    exact: true,
    path: '/renderProp',
    component: RenderProp,
  },
  {
    exact: true,
    path: '/aop',
    component: Aop,
  },
];

export default learn;
