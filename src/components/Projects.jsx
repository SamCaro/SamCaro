import '../styleSheets/Proyectos.css';

export function Proyectos(props) {
    return (
      <div className='contenedor-proyectos'>
        <img 
        className='img-proyectos'
         src={require(`../img/proyecto-${props.img}.gif`)} 
        alt='Gif proyecto' />
        <div className='contenedor-text-proyectos'>
          <p className='titulo-proyecto'>
            <strong>{props.titulo}</strong></p>
          <p className='descripcion-proyecto'>{props.descripcion} <strong>Herramientas:</strong> {props.herramientas}</p>
        </div>
      </div>
    )
}

