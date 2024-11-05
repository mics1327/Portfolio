import './App.css';
import { NavBar } from './components/navbar';
import { Toggle } from './components/toggleDarkMode';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <section id="home" className="section"><Home /></section>
      <section id="about" className="section"><About /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="contact" className="section"><Contact /></section>
      </div>
  );
}

export default App;
