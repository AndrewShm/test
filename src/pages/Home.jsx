import React, { Component }  from 'react';
import Card from '../components/Card'

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) {
    return (
        <div className="content">
            <div className="content__heading-block d-flex justify-between align-center">
                <h1 className="content__heading">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="content__search-block search-block d-flex">
                    <img src="/img/search.svg" alt="Search" />
                    {searchValue && (
                    <img 
                        onClick={() => setSearchValue('')} 
                        className="clear cu-p" 
                        src="/img/btn-remove.svg" 
                        alt="Clear" 
                    />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Home;