import { useState } from "react";
import Flowers from '../assets/img/logosc.png'

const AnimationLogo = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  return (
    <div className='ml-[-60px] sm:ml-[-350px]'>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        style={{
          position: 'relative',
          width: '180px',
          height: '200px',
        }}
      >
        <img
          className={` ${hovered ? 'opacity-0' : 'opacity-100'
            }`}
          src={Flowers}
          alt="Flowers"
        />
        <p
          className={`absolute top-0 left-0 w-full h-full  text-2xl font-bold text-verdebiche  flex justify-center items-center ${hovered ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            transform: hovered
              ? 'translate3d(10px, 10px, 0) scale(0.5)'
              : 'none',
            transition: 'transform 3s',
            color: hovered ? 'rgb(0, 95, 0)' : 'white',
          }}
        >
          20.23
        </p>
      </div>
    </div>
  );
};

export default AnimationLogo;