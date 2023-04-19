import { Outlet } from 'react-router-dom';
import { Header } from './units/Header';

export const GeneralLayout = () => {
  return (
    <div>
      <Header />
      <div className='w-full px-3'>
        <div className='max-w-3xl mx-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
