import React, { useState } from 'react';
import '../styleSheets/Proyectos.css';

export function ContainerProjects(props) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <article
      className=" p-2 overflow-hidden transition-transform transform hover:scale-125 hover:shadow-x1"
    >
      <div className="max-w-md rounded-md overflow-hidden sm:w-[300px] ">
        <div className="border border-pink-200 image-container">
          <img 
            className="w-full rounded-md "
            src={require(`../assets/img/proyecto-${props.img}.gif`)}
            alt="Gif proyecto"
          />
        </div>
 
      <div className="overlay toggleDescription rounded-md ">
        <div className="content">
          <p
            className="titulo-proyecto text-white text-xl hover:text-pink-300 font-thin cursor-pointer"
            onClick={toggleDescription}
          >
            <strong>{props.titulo}</strong>
          </p>
          {showDescription && (
            <p className='descripcion-proyecto text-[14px]' >
              {props.descripcion}
            </p>
          )}
             <p className="descripcion-proyecto text-[14px] ">
             {props.skills}
            </p>
          <a href={props.demoLink} className="demo-button cursor-pointer hover:text-pink-200 " target='_black'>Demo
          </a>
        </div>
      </div>

      </div>
    </article>
  );
}
