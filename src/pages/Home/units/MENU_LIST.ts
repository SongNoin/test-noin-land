interface IMenu {
  id: number;
  name: string;
  path: string;
}

export const MENU_LIST: IMenu[] = [
  { id: 1, name: '상식퀴즈', path: '/commonquiz' },
  { id: 2, name: '나를 맞춰줘', path: '/quizme' },
  { id: 3, name: '개발중...', path: '/' },
];
