import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { App } from './App';
import { GlobalProvider as Provider } from './providers';
import { HomePage } from './pages/HomePage';

export const Root = () => {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};
