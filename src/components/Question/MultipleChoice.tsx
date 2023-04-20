export const MultipleChoice = () => {
  const answerExample = ['1번', '2번', '3번', '4번'];
  return (
    <div className='mt-6'>
      <div className='text-2xl'>
        1. 문제 제목 문제 제목 문제 제목 문제 제목 문제 제목 문제 제목 문제 제목
        문제 제목 문제 제목 문제 제목 문제 제목 문제 제목 문제 제목 문제 제목
      </div>
      <img
        className='object-contain w-4/5 mx-auto mt-3 overflow-hidden rounded-md'
        alt='quiz image'
        src='https://post-phinf.pstatic.net/MjAyMDAzMDVfMzAw/MDAxNTgzNDEzNTUyNTY1.0fmKJxIpFxmQxagjwEWOuhaqjS0tMcRZhxhsX_IE-KEg.5NjMNR8OD9KZvaLGvhGfvqECleCQ1sb95k0O6B90bnsg.JPEG/%EC%BF%BC%EC%B9%B48.jpg?type=w1200'
      />
      <div className='grid grid-cols-2 gap-1 mt-12 md:grid-cols-4'>
        {answerExample.map((el) => (
          <div
            className='relative border-2 border-blue-300 h-fit pb-[100%] cursor-pointer rounded-md hover:bg-blue-300 md:pb-[50%]'
            key={el}
          >
            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
              <div className='flex items-center justify-center h-[100%] p-5'>
                {el}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-10'></div>
    </div>
  );
};
