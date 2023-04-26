import { type } from 'os';
import Main from 'components/Main'
import Artist from 'pages/Artist'

// 연결되는 페이지가 많아지면 route를 따로 관리할 것
type route = {
  key: number,
  path: string, // '/경로'
  element: React.ComponentType<any>, // '컴포넌트 이름 -- 위에 import해서 쓸것',
}

const routes: Array<route> = [
  {
    key: 0,
    path: '/react-sofa-music',
    element: Main,
  },
  {
    key: 1,
    path: '/artist',
    element: Artist,
  }
];

export default routes;