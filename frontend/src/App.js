import React from 'react';
import Checkout from './Checkout';
import './App.css';

function App() {
  return (
    <div className="App">
          <h2>Welcome to Payment</h2>
          <p className="App-intro">
            <Checkout
              name={'Archer Zou Payment'}
              description={'Only the Book'}
              amount={1}
            />
          </p>
    </div>
  );
}

export default App;
