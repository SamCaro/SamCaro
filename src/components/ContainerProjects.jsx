// import '../styleSheets/Proyectos.css';

export function ContainerProjects(props) {
  return (
    <article className='flex'>
      <div  className=''>
        <img className='p-2'
          src={require(`../assets/img/proyecto-${props.img}.gif`)}
          alt='Gif proyecto' />
        <div className='pl-2 bg-white'>
          <p className='titulo-proyecto text-military text-3x1 mb-[18px] font-Roboto font-bold hover:text-VeryDarkBlue cursor-pointer'>
            <strong>{props.titulo}</strong></p>
          <p className='descripcion-proyecto text-[14px]'>
            {props.descripcion} <strong className='text-military'>SKILLS</strong> {props.herramientas}
          </p>
        </div>
      </div>
    </article>
  )
}

