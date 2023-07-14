import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';

const Homepage = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [currentSearch, setCurrentSearch] = useState("");
    const auth = "w3derqhOepRLWBKdTrri29HLqQya0GNwA6SlU9vWiS82GBhdYgqMnB4X";
    const initialURL = "https://api.pexels.com/v1/curated?locale=zh-TW&page=1&per_page=15";
    const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&locale=zh-TW&per_page=15&page=1`;

    // fetch data from pexels api
    const search = async (url) => {
        setPage(2);
        if (input === "") {
            url = initialURL;
        }
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        let parsedData = await dataFetch.json();
        // console.log(parsedData);
        setData(parsedData.photos);
    }

    // load more pictures
    const morepicture = async () => {
        // 兩種情況 1.精選 2.搜尋 下
        let newURL;
        // 1.精選
        if (currentSearch === "") {
            newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15&locale=zh-TW`
        } else { //  2.搜尋
            newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}&locale=zh-TW`
        }
        setPage(page + 1);

        const dataFetch = await fetch(newURL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        let parsedData = await dataFetch.json();
        // console.log(parsedData);
        if (parsedData.photos) {
            setData(data.concat(parsedData.photos));
            // setData([...data,...parsedData.photos]);

            // if (data) {
            //     setData(data.concat(parsedData.photos));
            // } else {
            //     setData(parsedData.photos);
            // }
        }
    }

    // fetch data when the page loads up
    useEffect(() => {
        search(initialURL);
    }, []);

    // more picture (JS closure)
    useEffect(() => {
        if (currentSearch === "") {
            search(initialURL);
        } else {
            search(searchURL);
        }
    }, [currentSearch, searchURL]);

    return (
        <div style={{ minHeight: "100vh" }}>
            <Search search={() => {
                // JS closure 
                setCurrentSearch(input);
                // search(searchURL);
            }} setInput={setInput} />
            <div className="pictures">
                {data && data.map((d) => {
                    return <Picture key={d.id} data={d} />
                })}
            </div>

            <div className="morePicture">
                <button onClick={morepicture}>Load More</button>
            </div>
        </div >
    )
}

export default Homepage