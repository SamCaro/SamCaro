// import React, { useState } from 'react';
import '../styleSheets/Proyectos.css';

export function ContainerProjects(props) {
  // const [showDescription, setShowDescription] = useState(false);

  // const toggleDescription = () => {
  //   setShowDescription(!showDescription);
  // };

  return (
<section className='p-20 hover:px-36'>

      <div className="shadow-2xl overflow-hidden rounded-md sm:w-[180px] sm:h-[500px] transition-transform hover:scale-150  hover:w-[500px] hover:flex hover:place-items-center hover:justify-center hover:border hover:bg-gray-200 hover:shadow-2xl hover:space-x-4 hover:z-50">

        < div className="image-container h-40 w-auto bg-gradient-to-br from-gray-300 to-transparent bg-opacity-20 rounded-lg">
       
            {props.isVideo ? (
              <video className='w-full' controls>
                <source src={require(`../assets/img/proyecto-${props.img}.mp4`)} type='video/mp4' />
              </video>
            ) : (
              <img
                className="w-full"
                src={require(`../assets/img/proyecto-${props.img}.gif`)}
                alt="Gif proyecto"
              />
            )}
          
        </div>


        <div className=" overlay toggleDescription rounded-lg 
       hover:shadow-2xl  hover:p-4 hover:space-x-4 
        ">
          <div className="content p-4 hover:w-[300px]">

            <p
              className="titulo-proyecto px-2 py-4 text-white text-xl     hover:text-purple-300 font-thin"
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

            <p className="descripcion-proyecto text-[8px] px-4 text-black ">
              {props.descripcion}
            </p>

            {/* <p className="descripcion-proyecto text-[14px] text-purple-600 ">
              {props.skills}
            </p> */}

            <div className='m-6  space-x-2 flex justify-around'>
              
              <a href={props.demoLink} className="demo-button cursor-pointer hover:text-pink-400 " target='_black'
              >
                Demo
              </a>
              <a href={props.exploreLink} className="bg-transparent text-[8px] hover:bg-gray-100 text-pink-400 font-semibold py-2 px-4  hover:text-white    border border-pink-400 hover:border-transparent rounded cursor-pointer" target='_black'
              >
                Exporar
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}


