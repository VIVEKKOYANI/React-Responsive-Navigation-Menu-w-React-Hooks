import React from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Content'>
        <p>42 is the answer to everything...</p>
      </div>
    </div>
  );
}

export default App;
