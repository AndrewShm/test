import React from "react";
import { AppContext } from '../App';

function CardPopup (props) {
    const {isItemAdded} = React.useContext(AppContext);

    return (
        props.isOpened && 
        <div className="overlay">
            <div className="cardPopupConteiner">
                <img onClick={props.onPopupClose} className='removeButton' src='/img/btn-remove.svg' alt='Remove'/>
                <h3>
                    {props.title}
                </h3>
                <img className="cardPopupImg" alt={props.title} src={props.image} />
                <h2>
                    {props.price} руб.
                </h2>
                {props.onPlus &&
                    <img
                        className="plus"
                        onClick={props.onClickPlus}
                        src={isItemAdded(props.id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                        alt='Plus' 
                    />
                }
                <img onClick={props.onClickFavorite} className="favorite" src={props.isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt='Unliked' />
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default CardPopup