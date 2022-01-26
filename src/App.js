import React, { useContext, useEffect, useState } from "react";
import AutoComplete from "./AutoComplete";
import OutputBox from './components/OutputBox';
import SearchContextProvider, { SearchContext } from "./context/SearchContext";

function App(){
   const searchQuery = useContext(SearchContext);
   

  return(
    <>
      <h2 className="heading">React Autocomplete SearchBox using external API</h2>
      <SearchContextProvider>
        <AutoComplete />
      </SearchContextProvider>
      
    </>
  )
  
}


export default App;