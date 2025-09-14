import React from 'react';
import {BrowserRouter as Router,Routes , Route} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';
import MangerBoard from './pages/MangerBoard';
import ProjectsDashboard from './pages/ProjectsDashboard';
import EmployeeBoard from './pages/EmployeeBoard';




function App() {
 

  return (
    <>
   
      <Routes>
       <Route path='/' element={<Home/>}/>
       {/*  <Route path='/managerboard' element={<MangerBoard/>}/> */}
         <Route path='/projectsdashboard' element={<ProjectsDashboard/>}/>
       {/* <Route path='/employeeboard' element={<EmployeeBoard/>}/> */}
      </Routes>
    
    </>
  )
}

export default App
