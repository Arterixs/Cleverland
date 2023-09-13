import { Route, Navigate, Routes } from 'react-router-dom';
import { MainPage } from 'pages/main/Main';
import { LayoutMainPage } from 'shared/ui/templates/layout-main/Layout-main';
import { ContractPage } from 'pages/contract-page';
import { OfertaPage } from 'pages/oferta-page';
import { Layout } from 'shared/ui/templates/layout/Layout';

export const AuthRouters = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route element={<LayoutMainPage />}>
        <Route index element={<Navigate to='books/all' />} />
        <Route path='/books/:category' element={<MainPage />} />
        <Route path='/books/oferta' element={<OfertaPage />} />
        <Route path='/books/contract' element={<ContractPage />} />
      </Route>
    </Route>
  </Routes>
);
