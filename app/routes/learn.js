import Context from '../component/learn/context/view';
import Ref from '../component/learn/ref/view';
import Protals from '../component/learn/protals/view';
import RenderProp from '../component/learn/renderProp/view';

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
];

export default learn;
