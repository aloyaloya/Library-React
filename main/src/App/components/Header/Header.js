import React from 'react'
import './Header.css';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SearchIcon from '@mui/icons-material/Search';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Dialog from '@mui/material/Dialog';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { useNavigate } from 'react-router-dom';

const cityPopular = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Нижний Новгород', 'Краснодар', 'Новосибирк', 'Самара',
'Челябинск', 'Иркутск', 'Казань', 'Ростов-на-Дону', 'Красноярск', 'Уфа', 'Ярославль']

const bottomLinks = ['Акции', 'Подборки', 'Новости', 'Книжные циклы'];

export default function Header({ takeRequest }) {
    const navigate = useNavigate();
    const [tempRequest, setTempRequest] = useState('');
    const [country, setCountry] = useState('Москва');
    const [cityMenu, setCityMenu] = useState(null);
    const [popupMenu, setPopupMenu] = useState(null);
    const [openChangeCityDialog, setOpenChangeCityDialog] = useState(false);
    const [authorizationModal, setAuthorizationModal] = useState(null);
    
    const searchBook = (event) => {
        if(event.key === 'Enter' && tempRequest !== '') {
            toSearch();
        };
    }

    const handleClickSearch = () => {
        if(tempRequest !== '') {
            toSearch();
        }
    }

    const handleClickHome = () => {
        navigate('home', { replace: false })
    }

    const toSearch = () => {
        takeRequest(tempRequest);
        navigate('search-result', { replace: false });
    }

    const openCityMenu = Boolean(cityMenu);

    const handleClickCityMenu = (event) => {    
        setCityMenu(event.currentTarget);
    };

    const handleCloseCityMenu = () => {
        setCityMenu(null);
    };
    
    const openPopupMenu = Boolean(popupMenu);

    const handleClickPopupMenu = (event) => {
        setPopupMenu(event.currentTarget);
    };

    const handleClosePopupMenu = () => {
        setPopupMenu(null);
    };

    const openCityDialog = Boolean(cityMenu);

    const handleClickChangeCityDialog = () => {
        setOpenChangeCityDialog(true);
    };
  
    const handleCloseChangeCityDialog = () => {
        setOpenChangeCityDialog(false);
    };

    const openAuthorizationDialog = Boolean(authorizationModal);

    const handleClickAuthorizationDialog = () => {
        setAuthorizationModal(true);
    };
  
    const handleCloseAuthorization = () => {
        setAuthorizationModal(false);
    };

  return (
    <div className='header'>
        <div className='header-top-bar__container'>
            <div className='header-pages-list'>
                <div onClick={handleClickCityMenu} className='header-city__title'><NearMeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr:1, fontSize: 20}} />Россия, {country}</div>
                <Menu
                    className='change-city-menu'
                    id="basic-menu"
                    anchorEl={cityMenu}
                    open={openCityMenu}
                    onClose={handleCloseCityMenu}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className='change-city-container'>
                        <div className='change-city__title'>Ваш город - {country}?</div>
                        <button onClick={handleCloseCityMenu} className='change-city__button accept'>Да, я здесь</button>
                        <button onClick={() => {handleCloseCityMenu(); handleClickChangeCityDialog()}}className='change-city__button cancel'>Нет, изменить город</button>
                        <div className='change-city__description'>От выбранного города зависят способы доставки</div>
                    </div>
                </Menu>
                <Dialog
                    open={openChangeCityDialog}
                    onClose={handleCloseChangeCityDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div className='city-modal__content'>
                        <div className='city-modal__title'>Выберите город</div>
                        <div className='city-modal__country'><LocationCityIcon sx={{ display: { xs: 'none', md: 'flex' }, mr:1, fontSize: 26}} />Россия</div>
                        <div className='city-modal-popular'>
                            {cityPopular.map((item, key) => {
                                return (
                                    <div key={key} onClick={() => { handleCloseChangeCityDialog(); setCountry(item) }} className='city-modal-popular__item'>{item}</div>
                                )
                            })}
                        </div>
                    </div>
                </Dialog>
                <a className='header-pages-list__item'>Адреса магазинов</a>
                <a className='header-pages-list__item'>Доставка и оплата</a>
                <a onClick={handleClickPopupMenu} className='header-pages-list__item popup'>Еще<KeyboardArrowDownIcon sx={{ display: { xs: 'none', md: 'flex' }, ml:0.2, mb:1, fontSize: 20}} /></a>
                <Menu
                    id="basic-menu"
                    anchorEl={popupMenu}
                    open={openPopupMenu}
                    onClose={handleClosePopupMenu}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className='popup-container'>
                        <div onClick={handleClosePopupMenu} className='popup_item'>Бонусная программа</div>
                        <div onClick={handleClosePopupMenu} className='popup_item'>Партнерская программа</div>
                    </div>
                </Menu>
                <a className='header-pages-list__item hidden'>Бонусная программа</a>
                <a className='header-pages-list__item hidden'>Партнерская программа</a>
            </div>
            <div className='header-pages-list'>
                <a className='header-pages-list__item'>8 (800) 444-8-444</a>
                <a className='header-pages-list__item'>Обратная связь</a>
            </div>
        </div>
        <div className='header-sticky__row'>
            <div className='header__menu'>
                <MenuIcon className='header__menu-icon' sx={{ display: { xs: 'none', md: 'flex' }, ml: .4, mt: -.1, fontSize: 32}} />
            </div>
            <div onClick={handleClickHome} className='header-logo'>
                <div className='header-logo__first-row'>КНИГО</div>
                <div className='header-logo__second-row'><div>ЛЮБ</div><ImportContactsIcon className='header-logo__icon' sx={{ display: { xs: 'none', md: 'flex' }, ml: .4, mt: -.1, fontSize: 32}} /></div>
            </div>
            <div className='catalog__button'>
                <button><ShoppingBagIcon sx={{ display: { xs: 'none', md: 'flex' }, mr:1, mb:0.2, fontSize: 28}} />Каталог</button>
            </div>
            <div className='header-search__input'>
                <input value={tempRequest} onChange={e => setTempRequest(e.target.value)}
                onKeyPress={searchBook} placeholder='Хочу найти' spellCheck="false"></input>
                <button onClick={handleClickSearch} className='search__button'><SearchIcon id ='search_icon' sx={{ display: { xs: 'none', md: 'flex' }, ml: .4, mt: -.1, fontSize: 32, color: 'white'}} /></button>
            </div>
            <div className='header-controls'>
                <button onClick={handleClickAuthorizationDialog}><PersonOutlineIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, ml:0.5, fontSize: 42}} /><div className='header-controls__text'>Войти</div></button>
                <button onClick={handleClickAuthorizationDialog} id='delivery'><LocalShippingIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, ml:0.9, fontSize: 42}} /><div className='header-controls__text'>Заказы</div></button>
                <button onClick={handleClickAuthorizationDialog}><BookmarkBorderIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, ml:2.1, fontSize: 42}} /><div className='header-controls__text'>Закладки</div></button>
                <button onClick={handleClickAuthorizationDialog}><ShoppingBasketIcon className='header-controls__icon' sx={{ display: { xs: 'none', md: 'flex' }, ml:1.4, fontSize: 42}} /><div className='header-controls__text'>Корзина</div></button>
            </div>
            <Dialog
                    open={openAuthorizationDialog}
                    onClose={handleCloseAuthorization}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div className='authorization-modal__content'>
                        <div className='authorization-modal-title'>Вход и регистрация</div>
                        <div className='authorization-modal-description'>Чтобы войти или зарегистрироваться, укажите номер телефона.</div>
                        <input className='phone-input' placeholder='+7 9'></input>
                        <button onClick={handleCloseAuthorization} className='authorization-modal-button'>Получить смс-код</button>
                    </div>
                </Dialog>
        </div>
        <div className='header-bottom__links'>
            {bottomLinks.map((item, key) => {
                return (
                    <a key={key} className='header-bottom__links-item'>{item}</a>
                )
            })}
        </div>
    </div>
  )
}
