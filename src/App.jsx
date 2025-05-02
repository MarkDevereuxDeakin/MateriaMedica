import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import KampoList from './components/KampoList';
import ToxinList from './components/ToxinList';
import About from './components/About';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

import './MateriaMedica.css';

function App() {
    const [searchResults, setSearchResults] = useState(null);
    const location = useLocation();

    useEffect(() => {
      // Clear search results when the route changes
      setSearchResults(null);
  }, [location.pathname]);

    return (
        <>
            <header>
                <h1 className="main-title">Japanese Kampo and Botanical Toxins</h1>
                <NavBar onNavClick={() => setSearchResults(null)} />

            </header>

            <SearchBar onResults={setSearchResults} />

            <main>
                {searchResults ? (
                    <SearchResults results={searchResults} />
                ) : (
                    <Routes>
                        <Route path="/" element={<KampoList />} />
                        <Route path="/kampo" element={<KampoList />} />
                        <Route path="/toxins" element={<ToxinList />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                )}
            </main>

            <Footer />
        </>
    );
}

export default App;
