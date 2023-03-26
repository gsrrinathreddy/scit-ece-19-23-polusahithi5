import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path="AboutUs" element={<AboutUs/>}/>
    <Route path="Experience"element={<Experience/>}/>
    <Route path="Skills"element={<Skills/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;
