import React from 'react';

const NewsItem = ({content}) => {

    const formatDate = (dateStr) => {
        if(!dateStr) return "N/A";

        var date = new Date(dateStr);
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = String(date.getFullYear());

        return `${dd}/${mm}/${yyyy}`;
    }

    return (
        <div className="news-item">
            <h3 className="title">{content.webTitle}</h3>
            <div className="date">{formatDate(content.webPublicationDate)}</div>
            <a href={content.webUrl} target="_blank">View ⧉</a>
        </div>
    );
};

export default NewsItem;