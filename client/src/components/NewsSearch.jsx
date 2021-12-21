import React, { useState } from 'react';
import SearchPanel from "./SearchPanel";
import ResultsList from "./ResultsList";
 
import apiConnector from '../api-connector';

const NewsSearch = () => {

    const [ newsItems, setNewsItems ] = useState('');

    const performSearch = (text) => {
        apiConnector.searchNews(text, (resp)=> {
            if(!resp || !resp.results){
                // handle invalid response
            } else {
                setNewsItems(resp.results);
            }
            
        });
    }

    return (
        <div>
            <SearchPanel performSearch={performSearch}/>
            <ResultsList newsItems={newsItems}/>
        </div>
    );
};

export default NewsSearch;