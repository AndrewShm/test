import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header d-flex justify-between align-center'>
      <Link to='/'>
        <div className='header-left d-flex align-center'>
          <img className='header-left__image' src='/img/logo.png' alt='Logotype'/>
          <div>
            <h3 className='header-left__heading text-uppercase'>React sneakers</h3>
            <p className='header-left__text opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className='header-right d-flex'>
        <li onClick={ props.onClickCart } className='header-right__cart cu-p'>
          <img src='/img/cart.svg' alt='Cart'/>
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to='/favorites'>
            <img src='/img/heart.svg' alt='Favorites'/>
          </Link>
        </li>
        <li>
          <img src='/img/user.svg' alt='User'/>
        </li>
        <li onClick={ props.onClickPhone } className='header-right__feedback-form'>
          <img src='/img/phone.png' alt='Feedback'/>
        </li>
      </ul>
    </header>
  );
}

export default Header;
