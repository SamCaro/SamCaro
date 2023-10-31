 import { ContainerProjects } from './components/ContainerProjects';
 import { Home } from './components/Home';
 import { Header } from './components/Header';

function App() {
  return (
    <main className='bg-zinc-300 px-20 pt-6'>
      <Header />
      <div className="md:flex md:gap-8">
        <Home />
      </div>
      <ContainerProjects />
    </main>
  );
}

export default App;
