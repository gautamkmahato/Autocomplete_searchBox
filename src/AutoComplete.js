import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import DeBounceHook from "./hooks/DeBounceHook";
import TvShow from './components/TvShow';
import { SearchContext } from "./context/SearchContext";
import SearchBox from "./components/SearchBox";

function AutoComplete() {
  const [tvShows, setTvShows] = useState([]);

  const {searchQuery, setSearchQuery, changehandler} = useContext(SearchContext);

  const prepareSearchQuery = (query) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    return encodeURI(url);
  }

  const searchTvShow = async () => {
    if(!searchQuery || searchQuery.trim() === ""){
      return;
    }
    const URL = prepareSearchQuery(searchQuery);
    const response = await axios.get(URL);
    console.log(response.data);
    setTvShows(response.data);
  }
  
  useEffect(() => {

  }, []);

  DeBounceHook(searchQuery, 500, searchTvShow);

  return(
    <>
        <SearchBox />
        {/* <button onClick={clearSearchBox}>clear</button> */}
        
        {
            searchQuery === "" ? <ul></ul> :
            <div className="box">
                <ul className="">
                    {tvShows.map((data) => (
                    <TvShow title={data.show.name} image={data.show.image && data.show.image.medium} />
                    ))}
                </ul>
            </div>
        }
    </>
  );
}

export default AutoComplete;