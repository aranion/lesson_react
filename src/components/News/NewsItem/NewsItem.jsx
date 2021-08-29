import React from 'react';
import './newsItem.css';

export default function NewsItem(props) {
  const { title, summary, imageUrl, url } = props
  return <li className='news-row'>
    <a href={url}>
      <h4>{title}</h4>
      <div className='news-wrapper'>
        <img className='news-img' src={imageUrl} alt={title} />
        <div>{summary}</div>
      </div>
    </a>
  </li>
}