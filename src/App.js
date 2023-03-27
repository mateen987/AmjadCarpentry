import Home from './Components/Home';
import Footer from './Components/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Faq from './Components/Faq\'s';
import Contact from './Components/Contact-us';

function App() {
  return (
    <div className="App">
      
      <Router>
 
     
        <Routes>
         
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/catalogue" element={<Faq/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
         
        </Routes>
        <Footer/> 
      </Router>
   
  
     
    </div>
  );
}

export default App;
