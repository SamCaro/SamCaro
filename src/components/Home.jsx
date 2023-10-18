import perfil from '../assets/perfil.png';

export const Home = () => {
  return (
    <div className='contenedor-home'>
      <img
  alt="perfil"
  src={perfil}
  className="img-home"
/>

      
      <div className="m-4">
        <h1 className="text-4xl font-bold text-black">Hi! I'm SANDRA CARO</h1>
        <p className="text-2xl font-normal text-black">Frontend Developer</p>
      </div>
    </div>
  );
};
