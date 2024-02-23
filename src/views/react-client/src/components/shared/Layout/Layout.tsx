import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Root from '@/components/pages/Root';
import NotFound from '@/components/pages/NotFound';
import { ROOT, PRODUCT_CREATE, PRODUCT_DETAIL } from '@/constants/routes';
import CreateProduct from '@/components/pages/CreateProduct';
import DetailProduct from '@/components/pages/DetailProduct';

const Layout: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROOT} element={<Root />} />
      <Route path={PRODUCT_CREATE} element={<CreateProduct />} />
      <Route path={PRODUCT_DETAIL} element={<DetailProduct />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Layout;
