import React from 'react';
import {Routes , Route} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';
import MangerBoard from './pages/MangerBoard';
import ProjectsDashboard from './pages/ProjectsDashboard';
import EmployeeBoard from './pages/EmployeeBoard';

import { Button } from "@/components/ui/button"


function App() {
 

  return (
    <>
      {/* <Navbar /> */}
      <div className="p-4">
        <Button variant="outline">Test Button - Click me!</Button>
        <Button variant="default" className="ml-2">Primary Button</Button>
        <Button variant="destructive" className="ml-2">Delete Button</Button>
      </div>
      <Routes>
       {/* <Route path='/' element={<Home/>}/> */}
       {/*  <Route path='/managerboard' element={<MangerBoard/>}/> */}
        <Route path='/projectsdashboard' element={<ProjectsDashboard/>}/>
        {/* <Route path='/employeeboard' element={<EmployeeBoard/>}/> */}
      </Routes>
    </>
  )
}

export default App
