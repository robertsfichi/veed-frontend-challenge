import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import FavoritesList from "./components/FavoritesList";
import RepositoriesList from "./components/RepositoriesList";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<RepositoriesList />} />
          <Route path="favorites" element={<FavoritesList />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);