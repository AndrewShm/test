import React from 'react';
import Card from '../components/Card';

function Favorites({ items }) {
  return (
    <div className='content'>
      <div className='content__heading-block d-flex justify-between align-center'>
        <h1>Мои закладки</h1>
      </div>
      <div className='d-flex flex-wrap'>
        { items
          .map((item, index) => (
            <Card
              key={ index }
              title={ item.title }
              price={ item.price }
              imageUrl={ item.imageUrl }
            />
          )) }
      </div>
    </div>
  );
}

export default Favorites;
