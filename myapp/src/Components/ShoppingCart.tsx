import { useState } from 'react'
import products from "../Data"
import { Data } from '../Data';
const ShoppingCart: React.FC = () => {
    const [cartItems, setCartItems] = useState<Data[]>(products);
  
  
    const handleIncrement = (id: number) => {
        setCartItems(prev =>
          prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      const handleDecrement = (id: number) => {
        setCartItems(prev =>
          prev.map(item =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };
    
      const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
  
    return (
    <div>  <div className='cart-items'>
    <ul >
      {cartItems.map((item:Data) => (
        <li key={item.id} className='cart-item'>
    <img src= {item.image} className='image' /> 
    <div className='item-details'>{item.name} </div>
    <div className='item-details'> {item.color} </div>
    <div  className='item-details' >
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span >{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
    <div className='item-details'>  {item.price.toLocaleString()} NGN </div>      </li>
      ))}
    </ul>
    </div>
    <h3>SubTotal: {totalPrice.toLocaleString()} NGN</h3>
    </div>
  )
}

export default ShoppingCart