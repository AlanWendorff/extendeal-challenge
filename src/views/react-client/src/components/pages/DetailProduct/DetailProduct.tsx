import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, FormControl, Grid, InputLabel, Select, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import useCreateProduct from '@/hooks/product/useCreateProduct';
import getProduct from '@/services/products/getProduct.service';
import { useParams } from 'react-router-dom';
import { ISingleProductDTO } from '@core/configuration/http/dto/Products.dto';
import Loading from '@/components/shared/Loading';
import Error from '@/components/shared/Error';
import useModifyProduct from '@/hooks/product/useModifyProduct';

enum EAvailability {
  true = 'Si',
  false = 'No'
}

export interface IFormInput {
  name: string;
  thumbnail_url: string;
  price: number;
  stock: number;
  is_available: EAvailability;
}

const DetailProduct: FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ISingleProductDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { handlePutProduct } = useModifyProduct();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handlePutProduct({
      id: `${product?.response.product.id}`,
      product_id: `${product?.response.product.product_id}`,
      name: data.name,
      thumbnail_url: data.thumbnail_url,
      stock: data.stock,
      price: data.price,
      is_available: `${data.is_available}` === 'true'
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProduct(`${id}`)
      .then((res) => {
        setProduct(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Error error={error} />

      {product && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid sx={{ gap: 2, padding: 5 }} container direction='column'>
            <h3>ID: {product.response.product.product_id}</h3>

            <TextField label='Nombre' variant='filled' required {...register('name')} defaultValue={product.response.product.name} />

            <TextField
              label='URL Imagen'
              variant='filled'
              required
              placeholder='https://www.myimage.com/image.png'
              {...register('thumbnail_url')}
              defaultValue={product.response.product.thumbnail_url}
            />

            <TextField
              type='number'
              label='Precio'
              variant='filled'
              required
              placeholder='152'
              {...register('price')}
              defaultValue={product.response.product.price}
            />

            <TextField
              type='number'
              label='Stock'
              variant='filled'
              required
              placeholder='59'
              {...register('stock')}
              defaultValue={product.response.product.stock}
            />

            <FormControl>
              <InputLabel id='combobox-availability'>Disponibilidad</InputLabel>
              <Select
                defaultValue={product.response.product.is_available}
                id='combobox-availability'
                label='Disponibilidad'
                {...register('is_available')}
              >
                <MenuItem value='false'>{EAvailability.false}</MenuItem>
                <MenuItem value='true'>{EAvailability.true}</MenuItem>
              </Select>
            </FormControl>

            <Button type='submit' sx={{ marginTop: 3 }} variant='contained' color='warning'>
              Modificar
            </Button>
          </Grid>
        </form>
      )}
    </>
  );
};

export default DetailProduct;
