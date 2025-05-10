import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar/>
      <News/>
    </div>
  )
}

export default App