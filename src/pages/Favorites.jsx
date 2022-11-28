import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className='content'>
      <div className='contentHeadingBlock'>
        <h1>Мои закладки</h1>
      </div>
      <div className='contentItems'>
        { favorites
          .map((item, index) => (
            <Card
              key={ index }
              favorited={true}
              onFavorite={onAddToFavorite}
              { ...item }
            />
          )) }
      </div>
    </div>
  );
}

export default Favorites;
