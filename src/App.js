import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AboutMe } from './Components/AboutMe';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import Calender from './Components/GithubCalc';
import Skills from './Components/Skills';
import { Contact } from './Components/Contact';

function App() {
  document.title="Govind-Portfolio"
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Calender/>
      <Contact/>
      <footer>Designed & Built by Govind Kumawat.</footer>
    </div>
  );
}

export default App;
