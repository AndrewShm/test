import React from 'react';
import styles from './Card.module.scss';

function Card({title, imageUrl, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({ title, imageUrl, price });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
            </div>
            <img src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="card__bottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img 
                    className={styles.plus} 
                    onClick={onClickPlus} 
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} 
                    alt="Plus"
                />
            </div>
        </div>
    )
}

export default Card