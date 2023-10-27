import { ContentProjects } from './components/ContentProjects';
import { Home } from './components/Home';
import { Header } from './components/Header';

function App() {
  return (
    <main className='px-4 pt-6'>
      <div className="App">
        <Header />
        <Home />
        <ContentProjects />
      </div>
    </main>
  );
}

export default App;
