
import { useState } from 'react';
import './App.css';
import Inputform from './components/Inputform';
import React from 'react'

import Navbar from './components/Navbar';



function App() {
  const [ mode,setmode]= useState('light')
  const Darkmode=()=>{
    if(mode==="light")
    {
            setmode('dark')
            document.body.style.backgroundColor='#214D5A'
    }
    else{
           setmode('light')
           document.body.style.backgroundColor='white';
    }
  }

  

  return (
   <>
   {/*<Navbar title="Navbar2" Home="About US"/>*/}
   <Navbar   mode={mode} Darkmode={Darkmode}/>
   <div className="container" />
<Inputform heading="Enter The Text Below to Perform Task:" mode={mode} />

   </>
  ); q
}

export default App;
