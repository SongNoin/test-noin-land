import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigation = useNavigate();

  return (
    <header className='flex items-center h-24 pl-10 pr-20 border-b-2'>
      <div onClick={() => navigation('/')} className='text-3xl'>
        NOINLAND
      </div>
    </header>
  );
};
