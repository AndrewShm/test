import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Feedback from './components/Feedback';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [feedbackOpened, setFeedbackOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://637ddb309c2635df8f90d2c8.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
    Axios.get('https://637ddb309c2635df8f90d2c8.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    Axios.get('https://637ddb309c2635df8f90d2c8.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    Axios.post('https://637ddb309c2635df8f90d2c8.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    Axios.delete(`https://637ddb309c2635df8f90d2c8.mockapi.io/cart/${ id }`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    Axios.post('https://637ddb309c2635df8f90d2c8.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='wrapper clear'>
      { cartOpened && <Drawer items={ cartItems } onClose={ () => setCartOpened(false) } onRemove={ onRemoveItem }/> }
      { feedbackOpened && <Feedback onClose={ () => setFeedbackOpened(false) }/> }
      <Header
        onClickCart={ () => setCartOpened(true) }
        onClickPhone={ () => setFeedbackOpened(true) }
      />

      <Routes>
        <Route path='/' element={
          <Home
            items={ items }
            searchValue={ searchValue }
            setSearchValue={ setSearchValue }
            onChangeSearchInput={ onChangeSearchInput }
            onAddToFavorite={ onAddToFavorite }
            onAddToCart={ onAddToCart }
          />
        }
        ></Route>

        <Route path='/favorites' element={ <Favorites items={ favorites } /*onAddToFavorite={onAddtoFavorite}*/ /> }></Route>
      </Routes>

    </div>
  );
}

export default App;
