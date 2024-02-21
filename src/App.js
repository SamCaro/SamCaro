import './styleSheets/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe'
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Projects/>} />
          <Route path='AboutMe' element={<AboutMe />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Contact' element={<ContactForm />} />
          </Routes>     
      </main>
    </BrowserRouter>
  );
}

export default App;

