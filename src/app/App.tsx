import React from 'react';
import './App.scss';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <h1 hidden>Product Catalog</h1>

        <main className="gridContainer">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
