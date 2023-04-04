import { createBrowserRouter } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router/dist/router';
import { Home } from '../pages/Home';

interface RouterBase {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

interface UserAccessibleRouterElement extends RouterBase {
  withAuth?: boolean; // 인증이 필요한 페이지 여부
}

type RouterElement = UserAccessibleRouterElement;

// 페이지 추가시 배열에 객체 추가
const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <Home />,
    withAuth: false,
  },
];

export const router: RemixRouter = createBrowserRouter(
  // Todo 레이아웃 설정
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: router.element,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);
