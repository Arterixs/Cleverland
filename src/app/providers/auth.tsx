import { Route, Navigate, Routes } from 'react-router-dom';
import { MainPage } from 'pages/main/Main';
import { LayoutMainPage } from 'shared/ui/templates/layout-main/Layout-main';
import { ContractPage } from 'pages/contract-page';
import { OfertaPage } from 'pages/oferta-page';
import { Layout } from 'shared/ui/templates/layout/Layout';
import {
  ALL_BOOKS_PATH,
  ALL_PATH,
  BOOKS_PATH,
  CATEGORY_ID_PATH,
  CONTRACT_PATH,
  TERMS_PATH,
} from 'shared/contants/router';

export const AuthRouters = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route element={<LayoutMainPage />}>
        <Route index element={<Navigate to={ALL_BOOKS_PATH} />} />
        <Route path={BOOKS_PATH} element={<Navigate to={ALL_PATH} />} />
        <Route path={CATEGORY_ID_PATH} element={<MainPage />} />
        <Route path={TERMS_PATH} element={<OfertaPage />} />
        <Route path={CONTRACT_PATH} element={<ContractPage />} />
      </Route>
    </Route>
  </Routes>
);
