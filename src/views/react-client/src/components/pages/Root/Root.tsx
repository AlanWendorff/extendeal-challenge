import { FC } from 'react';
import { Button, Grid } from '@mui/material';
import useProducts from '@/hooks/product/useProducts';
import Table from './components';
import { Link } from 'react-router-dom';
import { PRODUCT_CREATE } from '@/constants/routes';
import Loading from '@/components/shared/Loading';
import Error from '@/components/shared/Error';

const Root: FC = () => {
  const { products, isLoading, error, handleDeleteProduct } = useProducts();

  return (
    <>
      <Loading isLoading={isLoading} />
      <Error error={error} />

      {products && (
        <Grid container direction='column' width='100%' alignItems='flex-end' gap={3}>
          <Link to={PRODUCT_CREATE} aria-label='crear producto'>
            <Button sx={{ marginTop: 3 }} variant='contained' color='success'>
              Crear producto
            </Button>
          </Link>
          <Table products={products.response.products} handleDeleteProduct={handleDeleteProduct} />
        </Grid>
      )}
    </>
  );
};

export default Root;
