import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/layout/Layout';
import { LayoutMainPage } from 'pages/layout-main/Layout-main';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<LayoutMainPage />}>
            <Route index element={<Navigate to='books/all' />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
