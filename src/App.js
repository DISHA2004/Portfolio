import './App.css';
import About from './aboutsection/About';
import Header from './Header/Header';
import Home from './Homesection/Home';
import Contact from './contact/Contact';
import Skill from './skillsection/Skill';
import Footer from './footer/Footer';
import Scrollup from './scrollup/Scrollup';
import Qualification from './Journey/Qualification';
import Work from './Project/Work';
const App=()=> {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Qualification/>
      <Work/>
      <Contact/>
      
    </main>
    <Footer/>
    <Scrollup/>
    </>
  );
}

export default App;
