
import './App.css';
import Home from './Home';
import Search from './Search';
import{BrowserRouter,Routes, Route,Link}from'react-router-dom'
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode]= useState(false)
  function toggledarkmode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <BrowserRouter>
    <div className={darkMode?'dark':''}>
      <header className='header'>
            <h1 >Unsp.</h1>
            <Link to="/" className={darkMode?'dark-items':'link'}>home</Link>
            <Link to="/search" className={darkMode?'dark-items':'link'}>search</Link>
            <div className="dark-mode" onClick={toggledarkmode}>
              {
                darkMode ?<img src="./light-mode (1).png" alt="light" className='mode-img light' />:<img src='./dark-mode.png' alt='dark' className='mode-img ' />
              }
            </div>
            

        </header>
        
      <Routes>
        <Route path='/' exact element={<Home dark={darkMode}/>}/>
        <Route path='/search' element={<Search dark={darkMode}/>}/>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
