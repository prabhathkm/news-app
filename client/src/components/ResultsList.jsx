import React from 'react';
import NewsItem from "./NewsItem";

const ResultsList = ({newsItems}) => {

    return (
        <div className="search-results">
            { Object.entries(newsItems).map(([index, item]) => (
                <NewsItem content={item}/>
            )) }
        </div>
    );
};

export default ResultsList;