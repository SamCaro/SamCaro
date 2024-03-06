import { ContainerProjects } from './ContainerProjects';
import { Header } from './Header';

export const Projects = () => {
    return (
        <>
            <Header />
            <section className=' flex flex-wrap'>
            <ContainerProjects
                    img='cocode'
                    titulo='COCODE'
                    descripcion='Ecosistema que te permite Navegar por perfiles, examinar proyectos, tecnologias que dominan, experiencias de colaboración, simplificar el proceso de busqueda, haciendo que la conexión con el talento perfecto sea más eficiente y efectivo'
                    skills='Figma, JavaScript, React, Tailwinds' 
                    demoLink='https://cocode.vercel.app/'
                    exploreLink='https://www.figma.com/file/5KnvKZ5T6VovsPcsEQRCr3/No-Country---Plataforma-de-Desarrollo-Colaborativo.?type=design&node-id=0-1&mode=design&t=K6ta6ATbESiEE8At-0'
                    isVideo={true} 
                    />

                <ContainerProjects
                    img='burgerQueenApi'
                    titulo='BURGER QUEEN'
                    descripcion='App que administra consultas entrantes y ofrece respuestas en relacion con la gestión de órdenes, trabajadores y productos de un restaurante. Los endpoints agregan, visualizan, modifican y eliminan datos brindando un control total sobre la operaciones.'
                    skills='JavaScript, Node.js, Express, Prisma, PostgreSQL, JSON Web Tokens (JWT), Git, Notion, GitHub, Vercel' 
                    demoLink='https://github.com/SamCaro/DEV008-burger-queen-api'
                    exploreLink='https://github.com/SamCaro/DEV008-burger-queen-api'
                    />

                <ContainerProjects
                    img='RedSocial'
                    titulo='THE BIKE COMMUNITY'
                    descripcion='Red social para comunidad de mujeres ciclistas. Esta SPA Responsive la desarrolle junto con dos colaboradoras mas. Usamos Firebase como back-end. Se realizaron test unitarios.'
                    // skills='Html, JavaScript, CSS, Jest, Git, Trello, Corel Draw, Google Forms, Figma, Notion, Firebase, Firestore.'
                    skills=''
                    demoLink='https://the-bike-community.web.app/'
                    exploreLink='https://github.com/SamCaro/DEV008-social-network-The-Bike-Community'
                    />

                <ContainerProjects
                    img='dataLovers'
                    titulo='DATA LOVERS'
                    descripcion='Visualización de base de datos. Proyecto colaborativo en base a Historias de Usabilidad y prototipos de fidelidad. Creamos una vista de inicio y una vista con opciones de busqueda, filtros, barras dinamicas con estadisticas, ordenamiento y direccionamiento. Se realizaron test unitarios y es web responsive.'
                    skills='Html, CSS, JavaScript, Jest, Git, GitHub, Figma, Notion'
                    demoLink='https://samcaro.github.io/DEV008-data-lovers-League-of-Legends/'
                    exploreLink='https://github.com/SamCaro/DEV008-data-lovers-League-of-Legends'
                    />

                <ContainerProjects
                    img='mdLink'
                    titulo='MARKDOWN LINK'
                    descripcion='Libreria de interfaz de comando (CLI) que extrae y verifica enlaces en archivos Markdown de ruta específica. Muestra los enlaces encontrados y comprobará si son válidos mediante una solicitud HTTP. '
                    skills='JavaScript, Fetch, Jest, Miro, Git, GitHub,  Notion, Node JS, npm'
                    demoLink='https://www.npmjs.com/package/md-links-samcaro'
                    exploreLink='https://github.com/SamCaro/DEV008-md-links'
                    />

                <ContainerProjects
                    img='counter'
                    titulo='COUNTER CLIC'
                    descripcion='Aplicacion web interactiva de contador de clics desarrollado con React. Su funcion principal es rastrear y mostrar el número de clics realizados por el usuario. El contador tiene con dos botones: uno para iniciar y otro para restablecer el contador a cero. Se ajusta a diferentes dispositivos.'
                    skills='React, JavaScript, CSS, Html, GitHub, Vercel'
                    demoLink='https://counter-react-gold.vercel.app/'
                    exploreLink='https://github.com/SamCaro/Counter-React'
                    />

                 <ContainerProjects
                    img='calculate'
                    titulo='Play Calculator'
                    descripcion='SPA que permite realizar calculos en tiempo real, con un diseño lindo'
                    skills='React, Vercel.'
                    demoLink='https://calculator-react-livid.vercel.app/'
                    exploreLink='https://github.com/SamCaro/Calculator-React' 
                    isVideo={true} 
                   />  

                <ContainerProjects
                    img='InterfazReact'
                    titulo='INTERFAZ DATA'
                    descripcion='Visualizacion de datos'
                    skills='React JS, ES6, CSS, Git, npm, Vercel.'
                    demoLink='https://interview-tech-react.vercel.app/'
                    exploreLink='https://github.com/SamCaro/INTERFAZ-BASE-DE-DATOS-REACT' 
                    />

                {/* 
            <ContainerProjects
                img='masterTrivia'
                titulo='MASTER TRIVIA'
                descripcion='Interfaz basica que consta de una sola pantalla donde se realiza una trivia y proporciona las respuestas correctas asi como la cantidad de respuestas correctas.'
                skills='JavaScript, Html, CSS, GitHub'
                demoLink='http://127.0.0.1:5500/src/index.html' /> */}
            </section>
        </>
    );
};

