import React from 'react';
import NewsItem from "./NewsItem";

const PinnedList = ({newsItems}) => {

    return (
        <div className="pinned-news">
            { Object.entries(newsItems).map(([index, item]) => (
                <li><NewsItem content={item}/></li> 
            )) }
        </div>
    );
};

export default PinnedList;