import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AboutMe } from './Components/AboutMe';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';

function App() {
  document.title="Govind-Portfolio"
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
