import React, { useState } from 'react';
import '../styleSheets/Proyectos.css';

export function ContainerProjects(props) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <article
      className=" p-6 overflow-hidden transition-transform transform hover:scale-125 hover:shadow-x1"
    >
      <div className="max-w-md rounded-md overflow-hidden sm:w-[300px] ">
        <div className="image-container bg-gradient-to-br from-gray-300 to-transparent bg-opacity-20">
          <div className="rounded-lg overflow-hidden">
            {/* <img
              className="w-full"
              src={require(`../assets/img/proyecto-${props.img}.gif`)}
              alt="Gif proyecto"
            /> */}

            {props.isVideo ? (
              <video className='w-full' controls>
                <source src={require( `../assets/img/proyecto-${props.img}.mp4`)} type='video/mp4' />
                </video>
            ) : (
              <img
              className="w-full"
              src={require(`../assets/img/proyecto-${props.img}.gif`)}
              alt="Gif proyecto"
            />  
            )}
          </div>
        </div>


        <div className="overlay toggleDescription rounded-lg ">
          <div className="content">

            <p
              className="titulo-proyecto text-white text-xl hover:text-purple-600 font-bold"
              onClick={toggleDescription}
            >
              <strong>{props.titulo}</strong>
            </p>


            {/* <p
              className="titulo-proyecto text-white text-xl hover:text-purple-600 font-thin cursor-pointer"
              onClick={toggleDescription}
            >
              <strong>{props.titulo}</strong>
            </p> */}
            {/* 
            {showDescription && (
              <p className='descripcion-proyecto text-[14px] text-black' >
                {props.descripcion}
              </p>
              
            )} */}

            <p className="descripcion-proyecto text-[14px] text-black ">
              {props.descripcion}
            </p>

            {/* <p className="descripcion-proyecto text-[14px] text-purple-600 ">
              {props.skills}
            </p> */}

            <a href={props.demoLink} className="demo-button cursor-pointer hover:text-pink-400 " target='_black'
            >
              
              Demo
            </a>
            <a href={props.demoLink} className="demo-button bg-transparent hover:bg-gray-200 text-pink-400 font-semibold hover:text-white py-2  px-4 border border-pink-400 hover:border-transparent rounded cursor-pointer" target='_black'
            >
              Exporar
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
