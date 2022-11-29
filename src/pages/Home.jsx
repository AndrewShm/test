import React from 'react';
import Card from '../components/Card';

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) {

  const renderItems = () => {

    return items
    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item, index) => (
      <Card
        key={ index }
        onFavorite={ (obj) => onAddToFavorite(obj) }
        onPlus={ (obj) => onAddToCart(obj) }
        { ...item }
      />
    ))
  }

  return (
    <div className='content'>
      <div className='contentHeadingBlock'>
        <h1>{ searchValue ? `Поиск по запросу: "${ searchValue }"` : 'Все кроссовки' }</h1>
        <div className='searchBlock'>
          <img src='/img/search.svg' alt='Search'/>
          { searchValue && (
            <img
              onClick={ () => setSearchValue('') }
              className='clear cu-p'
              src='/img/btn-remove.svg'
              alt='Clear'
            />
          ) }
          <input onChange={ onChangeSearchInput } value={ searchValue } placeholder='Поиск...'/>
        </div>
      </div>
      <div className='contentItems'>
        { renderItems() }
      </div>
    </div>
  );
}

export default Home;
