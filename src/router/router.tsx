import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { AlbumCoverQuizPage } from '../pages/AlbumCoverQuiz';
import { CommonQuizPage } from '../pages/CommonQuiz';

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
    element: <HomePage />,
    withAuth: false,
  },
  {
    id: 1,
    path: '/common-quiz',
    label: 'CommonQuiz',
    element: <CommonQuizPage />,
    withAuth: false,
  },
  {
    id: 2,
    path: '/albumcover-quiz',
    label: 'AlbumCoverQuiz',
    element: <AlbumCoverQuizPage />,
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
