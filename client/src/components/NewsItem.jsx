import React from 'react';

const NewsItem = ({content}) => {

    return (
        <div class="news-item">
            <h3 class="title">{content.webTitle}</h3>
            <div class="date">{content.webPublicationDate}</div>
            <a href={content.webUrl} target="_blank">View ⧉</a>
        </div>
    );
};

export default NewsItem;