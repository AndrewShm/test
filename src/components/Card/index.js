import React from 'react';
import styles from './Card.module.scss';
import { AppContext } from '../../App';

function Card({ 
  id, 
  title, 
  imageUrl, 
  price, 
  onFavorite, 
  onPlus, 
  favorited = false, 
}) {
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {onFavorite && (
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt='Unliked'/>
        </div>
      )}
      <img src={imageUrl} alt='Sneakers'/>
        <h5>{ title }</h5>
      <div className={ styles.cardBottom }>
        <div>
          <span>Цена:</span>
          <b>{ price } руб.</b>
        </div>
        {onPlus &&
          <img
            className={ styles.plus }
            onClick={ onClickPlus }
            src={ isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg' }
            alt='Plus'
          />
        }
      </div>
    </div>
  );
}

export default Card;
