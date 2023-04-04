import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies'; 
import Qualification from './pages/Qualification'; 
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contactme from './pages/Contactme';
import Workshops from './pages/Workshops';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path="AboutUs" element={<AboutUs/>}/>
    <Route path="Experience"element={<Experience/>}/>
    <Route path="Hobbies"element={<Hobbies/>}/>
    <Route path="Qualification"element={<Qualification/>}/>
    <Route path="Skills"element={<Skills/>}/>
    <Route path="Projects"element={<Projects/>}/>
    <Route path="Certifications"element={<Certifications/>}/>
    <Route path="Workshops"element={<Workshops/>}/>
    <Route path="Contactme"element={<Contactme/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;
