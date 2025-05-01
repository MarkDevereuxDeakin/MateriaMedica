import React from 'react'
import {Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import KampoList from './components/KampoList';
import ToxinList from './components/ToxinList';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<KampoList />} />
        <Route path="/herbs" element={<KampoList />} />
        <Route path="/toxicology" element={<ToxinList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;