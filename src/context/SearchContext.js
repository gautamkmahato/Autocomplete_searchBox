import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

function SearchContextProvider(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [display, setDisplay] = useState('none');
  
    const crossButtonHandler = () => {
      setDisplay('inline-block');
    }

    const changehandler = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
      }
    const value = {searchQuery, setSearchQuery, changehandler, display, setDisplay, crossButtonHandler};

    return (
        <SearchContext.Provider value={value}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;