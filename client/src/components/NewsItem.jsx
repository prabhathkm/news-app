import React from 'react';

const NewsItem = ({content}) => {

    return (
        <div className="news-item">
            <h3 className="title">{content.webTitle}</h3>
            <div className="date">{content.webPublicationDate}</div>
            <a href={content.webUrl} target="_blank">View ⧉</a>
        </div>
    );
};

export default NewsItem;