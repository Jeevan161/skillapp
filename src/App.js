import React from 'react';
import './App.css';
import ResponsiveAppBar  from './components/ResponsiveAppBar.js';
import {  Routes,Route } from 'react-router';
import Course from './components/Course.js';
import Department from './components/Department.js';
import Quote from './components/Quote';
import Faculty from './components/Faculty';
import Log from './components/Log';
import Signup from './components/Signup'
import { Feedback } from '@material-ui/icons';



function App() {
  
  return (
    <div >
      <ResponsiveAppBar/>
      <Feedback></Feedback>
        <Routes>
        <Route path='Quote' element={<Quote/>}/>
          <Route path='Department' element={<Department/>}/>
          <Route path='Course' element={<Course/>}/>
          <Route path='Faculty' element={<Faculty/>}/>
          <Route path='Login' element={<Log/>}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='Feedback' element={<Feedback/>}/>
        </Routes>
       
        
      
      
    </div>
  );
}

export default App;
