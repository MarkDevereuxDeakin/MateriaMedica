import React, { useState } from 'react';

function SearchBar({ onResults }) {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/search?q=${query}`);
        const data = await response.json();
        onResults(data);
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '20px' }}>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Kampo herbs or toxins..."
                style={{ padding: '10px', width: '50%' }}
            />
            <button type="submit" className="tab-button">Search</button>
        </form>
    );
}

export default SearchBar;
