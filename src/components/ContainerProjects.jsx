import '../styleSheets/Proyectos.css';

export function ContainerProjects(props) {
  return (
    <section className='p-20 hover:px-36'>

      <div className="shadow-2xl overflow-hidden rounded-md sm:w-[200px] sm:h-[500px] 
      transition-transform hover:scale-150  hover:md:w-[500px] hover:flex hover:place-items-center hover:justify-center hover:border hover:bg-gray-100 hover:shadow-2xl hover:space-x-4 hover:z-50 hover:flex-col hover:sm:flex-row">

        < div className="image-container h-40 w-auto bg-gradient-to-br from-gray-300 to-transparent bg-opacity-20 rounded-lg">
          {props.isImage && (
            <img
              className='w-full'
              src={require(`../assets/img/proyecto-${props.img}.png`)}
              alt='Proyecto'
            />
          )}
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
        <div className=" toggleDescription rounded-lg hover:overlay
        ">
          <div className="content p-4 ">
            <p
              className="titulo-proyecto px-2 py-4 text-white text-xl     hover:text-purple-300 font-thin"
            >
              <strong>{props.titulo}</strong>
            </p>

            <p className="descripcion-proyecto text-[10px] px-4 text-black ">
              {props.descripcion}
            </p>

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