import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { QuizMe } from '../pages/QuizMe';

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
  {
    id: 0,
    path: '/quizme',
    label: 'Quizme',
    element: <QuizMe />,
    withAuth: false,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralLayout />,
    children: routerData.map((router) => ({
      path: router.path,
      element: router.element,
    })),
  },
]);
