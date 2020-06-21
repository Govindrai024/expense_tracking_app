import React from 'react';
import Child from './child.js'
import './App.css';
import { TransactionProvider } from './transContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TransactionProvider>
        <Child />
      </TransactionProvider>


      {/* </header> */}
    </div>
  );
}

export default App;
