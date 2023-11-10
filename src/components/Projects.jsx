import { ContainerProjects } from './ContainerProjects';
import { Header } from './Header';

export const Projects = () => {
    return (
        <>
            <Header />
            <section className='flex flex-wrap'>
                <ContainerProjects
                    img='burgerQueenApi'
                    titulo='BURGER QUEEN API'
                    descripcion='App que administra consultas entrantes y ofrecer respuestas en relacion con la gestión de órdenes, trabajadores y productos de un restaurante. Los endpoints agregan, visualizan, modifican y eliminan datos brindando un control total sobre la operaciones.'
                    skills='JavaScript, Node.js, Express, Prisma, PostgreSQL, JSON Web Tokens (JWT), Git, Notion, GitHub, Vercel' 
                    demoLink='https://github.com/SamCaro/DEV008-burger-queen-api' />

                <ContainerProjects
                    img='RedSocial'
                    titulo='THE BIKE COMMUNITY'
                    descripcion='Red social para comunidad de mujeres ciclistas. Esta SPA Responsive la desarrolle junto con dos colaboradoras mas. Usamos Firebase como back-end. Se realizaron test unitarios.'
                    skills='Html, JavaScript, CSS, Jest, Git, Trello, Corel Draw, Google Forms, Figma, Notion, Firebase, Firestore.'
                    demoLink='https://the-bike-community.web.app/' />

                <ContainerProjects
                    img='dataLovers'
                    titulo='DATA LOVERS'
                    descripcion='Visualización de base de datos. Proyecto colaborativo en base a Historias de Usabilidad y prototipos de fidelidad. Creamos una vista de inicio y una vista con opciones de busqueda, filtros, barras dinamicas con estadisticas, ordenamiento y direccionamiento. Se realizaron test unitarios y es web responsive.'
                    skills='Html, CSS, JavaScript, Jest, Git, GitHub, Figma, Notion'
                    demoLink='https://samcaro.github.io/DEV008-data-lovers-League-of-Legends/' />

                <ContainerProjects
                    img='mdLink'
                    titulo='MARKDOWN LINK'
                    descripcion='Biblioteca de interfaz de comando (CLI) que extrae y verifica enlaces en archivos Markdown de ruta específica. Con opciones de  --validate --stats. Muestra los enlaces encontrados y comprobará si son válidos mediante una solicitud HTTP. El código de estado y cuántos son enlaces únicos y/o rotos.'
                    skills='JavaScript, Fetch, Jest, Miro, Git, GitHub,  Notion, Node JS, npm'
                    demoLink='https://www.npmjs.com/package/md-links-samcaro' />

                <ContainerProjects
                    img='counter'
                    titulo='COUNTER CLIC REACT'
                    descripcion='Aplicacion web interactiva de contador de clics desarrollado con React. Su funcion principal es rastrear y mostrar el número de clics realizados por el usuario. El contador tiene con dos botones: uno para iniciar y otro para restablecer el contador a cero. Se ajusta a diferentes dispositivos.'
                    skills='React, JavaScript, CSS, Html, GitHub, Vercel'
                    demoLink='https://counter-react-gold.vercel.app/' />

                <ContainerProjects
                    img='calculate'
                    titulo='Calculator'
                    descripcion='SPA que permite realizar calculos en tiempo real'
                    skills='React, Vercel.'
                    demoLink='https://calculator-react-livid.vercel.app/' />

                <ContainerProjects
                    img='InterfazReact'
                    titulo='INTERFAZ BASE DE DATOS'
                    descripcion='Visualizacion de datos, cuenta con Pantalla de inicio de sesión que registra la clave y contraseña, en Pantalla 2 se consume la REST  API:https://jsonplaceholder.typicode.com/users , al hacer click en el nombre de un usuario despliega una nueva pantalla con la visualización del detalle del usuario seleccionado (Pantalla 3). Test Unitarios.'
                    skills='React JS, ES6, CSS, Git, npm, Vercel.'
                    demoLink='https://interview-tech-react.vercel.app/' />

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

