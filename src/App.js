
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {


  


  return (
    <Router>
      <Navbar />
   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
    

     
    
    </Router>
    
  )


  
}

export default App;
