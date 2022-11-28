import React from 'react'
import { AppContext } from '../App';

export const Info = ({title, image, description}) => {
    const { setCartOpened } = React.useContext(AppContext)

  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
        <img src={image} alt='EmptyCart'/>
        <h2>{title}</h2>
        <p className='opacity-6'>{description}</p>
        <button onClick={() => setCartOpened(false) } className='greenButton'>
            <img src='/img/arrow.svg' alt='Arrow'/>Вернуться назад
        </button>
    </div>
  )
}

export default Info;