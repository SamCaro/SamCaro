// import logo from './logo.svg';
import './App.css';
import { ContentProjects } from './components/ContentProjects';
// import { Proyectos } from './components/Proyectos';
import { Home } from './components/Home';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Menu />
      <Home />
      <ContentProjects />
    </div>
  );
}

export default App;
