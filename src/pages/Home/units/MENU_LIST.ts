interface IMenu {
  id: number;
  name: string;
  path: string;
}

export const MENU_LIST: IMenu[] = [
  { id: 1, name: '상식퀴즈', path: '/common-quiz' },
  { id: 2, name: '앨범 재킷 퀴즈', path: '/albumcover-quiz' },
  { id: 3, name: '개발중...', path: '/' },
];
