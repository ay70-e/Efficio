import React from 'react';
import {BrowserRouter as Router,Routes , Route} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';
import MangerBoard from './pages/MangerBoard';
import ProjectsDashboard from './pages/ProjectsDashboard';
import EmployeeBoard from './pages/EmployeeBoard';
import EmployeeTable from './components/EmployeeTable';
import Contact from './pages/Contact';



function App() {
 

  return (
    <>
   
      <Routes>
         
       <Route path='/' element={<Home />}/>
      
       <Route path='/Mangerboard/:id' element={<MangerBoard />}/> 
        <Route path='/ProjectsDashboard/:id' element={<ProjectsDashboard />} />
        <Route path='/employeeboard/:id' element={<EmployeeBoard/>}/> 
         <Route path="/employees" element={<EmployeeTable />} />
         <Route path='Contact' element={<Contact />} />


      </Routes>
    
    </>
  )
}

export default App
