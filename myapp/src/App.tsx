

import './App.css'
import Payment from './Components/Payment'
import ShoppingCart from './Components/ShoppingCart'

function App() {
 

  return (
    <>
     <h1 className='heading'>Your Shopping Cart </h1>
    <div className="app-container">
     
       <ShoppingCart/>
       <Payment/>
    </div>
    </>
  )
}

export default App
