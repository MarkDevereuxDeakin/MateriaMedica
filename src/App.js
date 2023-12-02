import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavMenu from './components/NavMenu.jsx';
import Header from './components/Header';
import ToxinList from "./components/ToxinList.jsx";
import KampoList from "./components/KampoList.jsx";
import Edit from "./components/edit.js";
import Create from "./components/create.js";
import BottomNavBar from './components/BottomNavBar'


function App() {
  return (
    <div className='container'>
        <Header />     
        <NavMenu />
          <Routes>
            <Route path="/toxins" element={<ToxinList/>} />
            <Route path="/kampo" element={<KampoList/>} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />      
          </Routes> 
        <BottomNavBar/>  
    </div>
  );
}

export default App;
