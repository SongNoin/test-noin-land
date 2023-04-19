import { useNavigate } from 'react-router-dom';
import { MENU_LIST } from './units/MENU_LIST';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='grid grid-cols-2 gap-10 mt-20'>
        {MENU_LIST.map((el) => (
          <article
            key={el.id}
            onClick={() => navigate(el.path)}
            className='flex items-center justify-center h-32 text-2xl border rounded-md cursor-pointer hover:outline-pink-500 outline outline-offset-2 outline-2 border-slate-300 outline-blue-500'
          >
            {el.name}
          </article>
        ))}
      </div>
    </div>
  );
};
