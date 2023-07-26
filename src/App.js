import './App.css';
import About from './aboutsection/About';
import Header from './Header/Header';
import Home from './Homesection/Home';
import Contact from './contact/Contact';
import Skill from './skillsection/Skill';
import Qualification from './Journey/Qualification';
const App=()=> {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Qualification/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
