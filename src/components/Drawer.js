import React, { Component }  from 'react';

function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="drawer-heading d-flex justify-between">Корзина
                    <img onClick={onClose} className="remove-button cu-p" src="/img/btn-remove.svg" alt="Close" />
                </h2>

                {items.length > 0 ? (
                <div>
                    <div className="items">
                    {items.map((obj) => (
                        <div className="cart-item d-flex align-center">
                            <img className="cart-item__sneakers-logo" src={obj.imageUrl} alt="Sneakers" />
                            <div className="cart-item__sneakers-text-block">
                                <p className="cart-item__sneakers-text">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className="remove-button" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                    ))}
                    </div>
                    <div className="cart-total-block">
                    <ul>
                        <li className="d-flex">
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                        <button className="greenButton">Оформить заказ</button>
                    </div>
                </div>
                ) : (
                <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img src="/img/empty-cart.jpg" alt="EmptyCart" />
                    <h2>Корзина пустая</h2>
                    <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button onClick={onClose} className="greenButton">
                    <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
                    </button>
                </div>)
                }
                
            </div>
        </div>
    )
};

export default Drawer