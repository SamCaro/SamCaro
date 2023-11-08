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
    <div className=" ml-[200px] w-[200px] h-[200px] flex justify-center items-center">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        style={{
          position: 'relative',
          width: '100px',
          height: '100px',
        }}
      >
        <img
          className={` ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
          src={Flowers}
          alt="Flowers"
        />
        <p
          className={`absolute top-0 left-0 w-full h-full text-white text-5xl font-bold flex justify-center items-center ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
            transform: hovered
              ? 'translate3d(10px, 10px, 0) scale(0.5)'
              : 'none',
            transition: 'transform 3s',
            color: hovered ? 'rgb(0, 0, 10)' : 'white', 
          }}
        >
:)
        </p>
      </div>
    </div>
  );
};

export default AnimationLogo;