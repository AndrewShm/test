import axios from 'axios';
import React from 'react';
import Card from '../components/Card';

function Orders() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://637ddb309c2635df8f90d2c8.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      } catch (error) {
        alert('Ошибка при запросе заказов');
      }
    })();
  }, []);

  return (
    <div className='content'>
      <div className='contentHeadingBlock'>
        <h1>Мои заказы</h1>
      </div>
      <div className='contentItems'>
        { orders.map((item, index) => (
            <Card
              key={ index }
              favorited={true}
              { ...item }
            />
          )) }
      </div>
    </div>
  );
}

export default Orders;
