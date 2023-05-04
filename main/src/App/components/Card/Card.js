import React from 'react';
import './Card.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

export default function Card({ img, title, author, price, description }) {
    const [modal, setModal] = useState(null);

    const openModal = Boolean(modal);

    const handleClickModal = (event) => {    
        setModal(event.currentTarget);
    };

    const handleCloseModal = () => {
        setModal(null);
    };

  return (
    <div className='card'>
        <img onClick={handleClickModal} className='card__img' src={img}></img>
        <div className='card__price'>{price} ₽</div>
        <div onClick={handleClickModal} className='card__title'>{title}</div>
        <div className='card__author'>{author}</div>
        <div className='card-btns'>
            <button onClick={handleClickModal} className='btns__buy'>Купить</button>
            <button className='btns__favorite'><ShoppingCartIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, fontSize: 20}} /></button>
        </div>
        <Dialog
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className='modal__content'>
                <div className='modal-header'>
                    <img src={img} className='modal-img'></img>
                    <div className='modal-details'>
                        <div className='book-title'>{title}</div>
                        <div className='modal-controls'>
                            <div className='book-price'>{price} ₽</div>
                            <div className='modal_btns'>
                                <button onClick={handleCloseModal} className='modal__btns-buy'>Купить</button>
                                <button className='modal__btns-favorite'><ShoppingCartIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, fontSize: 32}} /></button>
                            </div>
                            <div className='modal__product-detail'>
                                <div className='detail-item'>
                                    <div className='detail-icon'><LocalShippingIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, fontSize: 36}} /></div>
                                    <div className='detail__content'>
                                        <div className='detail-title'>Доставка курьером, 175 ₽</div>
                                        <div className='detail-option'>
                                            <div className='date'>Завтра</div>
                                            <div className='option'>Варианты доставки</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='detail-item'>
                                    <div className='detail-icon'><FmdGoodIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, fontSize: 36}} /></div>
                                    <div className='detail__content'>
                                        <div className='detail-title'>В магазины сети, бесплатно</div>
                                        <div className='detail-option'>
                                            <div className='date'>Завтра</div>
                                            <div className='option'>Адреса магазинов</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='detail-item'>
                                    <div className='detail-icon'><LocalShippingIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, fontSize: 36}} /></div>
                                    <div className='detail__content'>
                                        <div className='detail-title'>В пункты выдачи, 110 ₽</div>
                                        <div className='detail-option'>
                                            <div className='date'>Завтра</div>
                                            <div className='option'>Пункты выдачи</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-detail-description'>
                    <div className='description-title'>Описание</div>
                    <div className='description-text'>{description}</div>
                    </div>
            </div>
        </Dialog>
    </div>
  )
}
