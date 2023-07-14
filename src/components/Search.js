import { logDOM } from '@testing-library/react';
import React, { useState } from 'react'

const Search = ({ search, setInput }) => {
    // let [data,setData] = useState(null)
    // const auth = "w3derqhOepRLWBKdTrri29HLqQya0GNwA6SlU9vWiS82GBhdYgqMnB4X";
    // const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

    // const search = async () => {
    //     const dataFetch = await fetch(initialURL, {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             Authorization: auth,
    //         },
    //     });
    //     let parsedData = await dataFetch.json();
    //     setData(parsedData);
    //     // console.log(parsedData);
    // }
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    
    return (
        <div className='search'>
            <input onChange={inputHandler} type="text" name="" id="" />
            <button onClick={search}>Search</button>
        </div>
    )
}

export default Search