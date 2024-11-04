import React from 'react';
import axios from 'axios';

const Search = () => {
    const getSearchDate = async() => {
        const url = "https://openapi.naver.com/v1/search/news.json"

        const optoins = {
            header: {
                "X-Naver-Client-Id" : "eLFtCBjwNEgrrufyiyF_",
                "X-Naver-Client-Secret" : "9b1HjJJgx4",
            }
        }
        const response = await axios.get();
    };
    return <div>Serach</div>
};

export default Search;