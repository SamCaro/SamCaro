import perfil from '../assets/img/perfil.png';

export const Home = () => {
  return (
    <div className=' h-[200px]'>
      <img 
        alt='Developer'
        src={perfil}
        className='absolute right-[15%] top-[50px] sm:left-[50%] sm:static w-1/5 h-auto rounded-full'
      />
      <div className='absolute sm:text-[40px] sm:left-[0] sm:w-screen p-6 sm:static left-[20%] top-[20%] w-[620px] h-[250px] black'>
        <h1 className="text-5xl font-bold text-black">Hi! I'm SANDRA CARO</h1>
        <p className="text-4xl font-normal text-black">Frontend Developer</p>
      </div>
    </div>
  );
};
