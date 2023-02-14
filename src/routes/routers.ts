import { type } from 'os';

// 연결되는 페이지가 많아지면 route를 따로 관리할 것
type route = {
  key: 1,
  path: '/',
  element: '<컴포넌트 이름> -- 위에 import해서 쓸것',
}

const routes: Array<route> = [
  {
    key: 1,
    path: '/',
    element: '<컴포넌트 이름> -- 위에 import해서 쓸것',
  }
];

export default routes;