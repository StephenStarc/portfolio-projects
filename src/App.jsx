import { useEffect, useState } from 'react'
import Navbar from './components/navBar/Navbar'
import './App.css'

import Ongoing from './components/Ongoing/Ongoing'
import AllProjects from './components/Allprojects/AllProjects'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Ongoing></Ongoing>
     <AllProjects />
    </>
  )
}

export default App
