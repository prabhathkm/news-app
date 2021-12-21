import React, { useState } from 'react';
 

const SearchPanel = ({ performSearch }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        performSearch(userInput);
    }

    return (
        <div className="search-panel">
            <form onSubmit={handleSubmit}>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Search News"/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchPanel;