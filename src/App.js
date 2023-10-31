/* eslint-disable no-lone-blocks */
//  import { ContainerProjects } from './components/ContainerProjects';
//  import { Home } from './components/Home';
//  import { Header } from './components/Header';

// function App() {
//   return (
//     <main className='bg-zinc-300 px-20 pt-6'>
//       <Header />
//       <div className="md:flex md:gap-8">
//         <Home />
//       </div>
//       <ContainerProjects />
//     </main>
//   );
// }

// export default App;



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './components/Projects';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <main className='bg-zinc-300 px-20 pt-6'>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='AboutMe' element={<AboutMe />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;

