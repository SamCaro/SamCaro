import { Projects } from './Projects';

export const ContainerProjects = () => {
    return (

        <section className='mt-6 md:flex'>
            <Projects
                img='burgerQueenApi' 
                titulo='BURGER QUEEN API'
               // descripcion='App que permite administrar consultas entrantes y ofrecer respuestas eficientes en relacion con la gestión de órdenes, trabajadores y productos de un restaurante. Los endpoints permiten agregar, visualizar, modificar y eliminar datos de manera eficiente, brindando un control total sobre la operaciones.'
                herramientas='JavaScript, Node.js, Express, Prisma, PostgreSQL, JSON Web Tokens (JWT), Git, Notion, GitHub, Vercel' />

            <Projects
                img='RedSocial'
                titulo='THE BIKE COMMUNITY'
               // descripcion='Red social para comunidad de mujeres ciclistas. Esta SPA Responsive la desarrolle junto con dos colaboradoras mas. Usamos Firebase como back-end. Se realizaron test unitarios.'
                herramientas='Html, JavaScript, CSS, Jest, Git, Trello, Corel Draw, Google Forms, Figma, Notion, Firebase, Firestore.' />

            <Projects
                img='dataLovers'
                titulo='DATA LOVERS'
               // descripcion='Visualización de base de datos para ayudar a jugadores de League of Leyends. Este proyecto lo realice en colaborativo, en base a Historias de Usabilidad y prototipos de alta y baja fidelidad. Creamos dos vistas, una simple de inicio y una segunda vista con detalle en opciones de busqueda, filtros, barras dinamicas con estadisticas, ordenamiento y direccionamiento al Esports multiplayer. Se realizaron test unitarios y es una Pagina web responsive.'
                herramientas='Html, CSS, JavaScript, Jest, Git, GitHub, Figma, Notion' />

            <Projects
                img='mdLink'
                titulo='MARKDOWN LINK'
              // descripcion='Esta biblioteca es una interfaz de comando (CLI) que extrae y verifica enlaces en archivos Markdown en una ruta específica. Con opciones de  --validate y --stats la aplicación te mostrará todos los enlaces encontrados y comprobará si son válidos mediante una solicitud HTTP. El código de estado y un mensaje de ok/fail se agregarán a cada enlace. Además, se añadirá un mensaje al final indicando la cantidad total de enlaces encontrados, cuántos de ellos son enlaces únicos (los que no están repetidos) y cuántos están rotos. Si la ruta no es válida o no se encuentra ningún archivo .md, aparecerá un error.'
                herramientas='JavaScript, Fetch, Jest, Miro, Git, GitHub,  Notion, Node JS, npm' />

            <Projects
                img='InterfazReact'
                titulo='INTERFAZ BASE DE DATOS'
             //   descripcion='Interfaz creada con funcionalidad para visualizacion de datos, cuenta con tres vistas: Pantalla de inicio de sesión (Pantalla 1) registra la clave y contraseña, al accionar el boton entrar permite llegar al listado de usuarios (Pantalla 2), se consume la REST  API:https://jsonplaceholder.typicode.com/users , al hacer click en el nombre de un usuario despliega una nueva pantalla con la visualización del detalle del usuario seleccionado (Pantalla 3). Test Unitarios.'
                herramientas='React JS, ES6, CSS, Git, npm, Vercel.' />

     
            <Projects
                img='counter'
                titulo='COUNTER CLIC REACT'
             //   descripcion='Aplicacion web interactiva de contador de clics desarrollado con React. Su funcion principal es rastrear y mostrar el número de clics realizados por el usuario. El contador tiene con dos botones: uno para iniciar y otro para restablecer el contador a cero. Se ajusta a diferentes dispositivos.'
                herramientas='React, JavaScript, CSS, Html, GitHub, Vercel' />

            <Projects
                img='masterTrivia'
                titulo='MASTER TRIVIA'
               // descripcion='Interfaz basica que consta de una sola pantalla donde se realiza una trivia y proporciona las respuestas correctas asi como la cantidad de respuestas correctas.'
                herramientas='JavaScript, Html, CSS, GitHub' />
        </section>
    );
};

