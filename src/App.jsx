import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Project1 from './Projects/Project1';
import Project2 from './Projects/Project2';
import Project3 from './Projects/Project3';
import Project4 from './Projects/Project4';
import Project5 from './Projects/Project5';
import Project6 from './Projects/Project6';
import Project7 from './Projects/Project7';
import Project8 from './Projects/Project8';

function App() {


  return (
    <>  <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/fyp-gradio" element={<Project1 />} />
        <Route path="/vidtrial" element={<Project2 />} />
        <Route path="/fillshift" element={<Project3 />} />
        <Route path="/peptidescalculator" element={<Project4 />} />
        <Route path="/dynamic-web-scrapper" element={<Project5 />} />
        <Route path="/botanista-gastronovi-api" element={<Project6 />} />
        <Route path="/botanista-gastronovi-api" element={<Project7 />} />
        <Route path="/Antiaging-solution" element={<Project8 />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
