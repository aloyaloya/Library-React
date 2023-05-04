import React, { useState, useEffect } from 'react'
import Card from '../Card/Card';
import './Home.css';

const API_key = 'AIzaSyBYH7LYFHq-QtB6kQDLHRsLNUfqSA5ER1A';

export default function Home() {
    const [newBooks, setNewBooks] = useState([]);
    const [ratedBooks, setRatedBooks] = useState([]);
    const [interestingBooks, setInterestingBooks] = useState([]);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=java&${API_key}&maxResults=6`)
        .then(res => res.json())
        .then(data => setNewBooks(data.items))

        fetch(`https://www.googleapis.com/books/v1/volumes?q=Python&${API_key}&maxResults=6`)
        .then(res => res.json())
        .then(data => setRatedBooks(data.items))

        fetch(`https://www.googleapis.com/books/v1/volumes?q=Программирование&${API_key}&maxResults=6`)
        .then(res => res.json())
        .then(data => setInterestingBooks(data.items))
    }, [])

  return (
    <div className='home-page'>
        <div className='head'>
            <img src={'https://cdn.img-gorod.ru/1200x456/content/main-banner/2924-imageWeb.jpg'} className='main-slider-item'></img>
            <div className='main-information-block'>
                <div className='main-information-block__item'>
                    <div className='item-title'>«Всех убил садовник...»</div>
                    <div className='item-description'>Настоящие звезды детектива!</div>
                </div>
                <div className='main-information-block__item'>
                    <div className='item-title'>Книжный дозор</div>
                    <div className='item-description'>Делитесь впечатлениями, получайте бонусы</div>
                </div>
                <div className='main-information-block__item'>
                    <div className='item-title'>Путеводитель по миру Толкина</div>
                    <div className='item-description'>«Хоббит», «Властелиц колец» и другие книги</div>
                </div>
            </div>
        </div>
        <div className='card-slider'>
            <div className='card-slider__title'>Новинки литературы</div>
            <div className='card-slider__content'>
                {newBooks.map((item, key) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let authors = (item.volumeInfo.authors !== undefined) ? item.volumeInfo.authors.join(', ') : '';
                    const price = Math.floor(Math.random() * (1200 - 150)) + 150;
                    
                    if(thumbnail !== undefined) {
                        return (
                            <Card key={key} img={thumbnail} title={item.volumeInfo.title} author={authors} price={price} description={item.volumeInfo.description}/>
                        )
                    }
                })}
            </div>
        </div>
        <div className='card-slider'>
            <div className='card-slider__title'>Лучшие из лучших</div>
            <div className='card-slider__content'>
                {ratedBooks.map((item, key) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let authors = (item.volumeInfo.authors !== undefined) ? item.volumeInfo.authors.join(', ') : '';
                    const price = Math.floor(Math.random() * (1200 - 150)) + 150;
                    
                    if(thumbnail !== undefined) {
                        return (
                            <Card key={key} img={thumbnail} title={item.volumeInfo.title} author={authors} price={price} description={item.volumeInfo.description}/>
                        )
                    }
                })}
            </div>
        </div>
        <div className='card-slider'>
            <div className='card-slider__title'>Лучшие из лучших</div>
            <div className='card-slider__content'>
                {interestingBooks.map((item, key) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let authors = (item.volumeInfo.authors !== undefined) ? item.volumeInfo.authors.join(', ') : '';
                    const price = Math.floor(Math.random() * (1200 - 150)) + 150;
                    
                    if(thumbnail !== undefined) {
                        return (
                            <Card key={key} img={thumbnail} title={item.volumeInfo.title} author={authors} price={price} description={item.volumeInfo.description}/>
                        )
                    }
                })}
            </div>
        </div>
    </div>
  )
}
