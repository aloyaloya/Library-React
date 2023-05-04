import React from 'react'
import { useState } from 'react'
import './Search.css';
import Card from '../Card/Card';
import { Checkbox } from '@mui/material';

export default function Search({ request, data }) {
    const newData = [];

    if(data !== undefined) {
        data.filter((item) => {
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    
            if(thumbnail !== undefined) {
                newData.push(item);
            }
        })
    }

  return (
    <div className='search-page__container'>
        <div className='search-page__found-message'>Показываем результаты поиска по запросу 
        «{request}», {(data === undefined) ? 0 : newData.length} результатов.</div>
        <div className='app-tabs__controls'>
            <div className='app-tabs__btn'>Товары</div>
        </div>
        <div className='catalog-search-products'>
            <div className='catalog-filters'>
                <div className='catalog-status'>Статус</div>
                <div className='status__checkbox'><input type='checkbox' className='checkbox'/>Новинки</div>
                <div className='status__checkbox'><input type='checkbox' className='checkbox'/>Лучшие из лучших</div>
            </div>
            <div className='products-list'>
                {newData.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let authors = (item.volumeInfo.authors !== undefined) ? item.volumeInfo.authors.join(', ') : '';
                    const price = Math.floor(Math.random() * (1200 - 150)) + 150;

                    return (
                        <Card img={thumbnail} title={item.volumeInfo.title} author={authors} price={price} description={item.volumeInfo.description}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
