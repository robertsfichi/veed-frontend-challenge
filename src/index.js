import React from 'react';
import ReactDOM from 'react-dom';
import ReposListContainer from './components/ReposListContainer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <main className="App">
      <ReposListContainer />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);