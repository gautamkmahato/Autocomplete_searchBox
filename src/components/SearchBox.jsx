import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import '../searchBox.css';

function SearchBox() {
    const {searchQuery, setSearchQuery, changehandler, display, setDisplay, crossButtonHandler} = useContext(SearchContext);
    

  return (
      <>
        
        <div>
            <div className="search">
                <div className="icon inline">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="input">
                    <input value={searchQuery} onChange={changehandler} onClick={crossButtonHandler} type="text" placeholder='Search...' />
                </div>
                <div className="cross" style={{display: display}}>
                    <span><i class="fa fa-times" aria-hidden="true" onClick={() => setSearchQuery(() => "")}></i></span>
                </div>
            </div>
        </div>
      </>
  )
}

export default SearchBox;