import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, FormControl, Grid, InputLabel, Select, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import useCreateProduct from '@/hooks/product/useCreateProduct';
import { v4 as uuid } from 'uuid';

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

const CreateProduct: FC = () => {
  const { handlePostProduct } = useCreateProduct();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const uniqueId = uuid();

    handlePostProduct({
      id: uniqueId,
      product_id: uniqueId,
      name: data.name,
      thumbnail_url: data.thumbnail_url,
      stock: data.stock,
      price: data.price,
      is_available: `${data.is_available}` === 'true'
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid sx={{ gap: 2, padding: 5 }} container direction='column'>
        <TextField label='Nombre' variant='filled' required {...register('name')} />

        <TextField
          label='URL Imagen'
          variant='filled'
          required
          placeholder='https://www.myimage.com/image.png'
          {...register('thumbnail_url')}
        />

        <TextField type='number' label='Precio' variant='filled' required placeholder='152' {...register('price')} />

        <TextField type='number' label='Stock' variant='filled' required placeholder='59' {...register('stock')} />

        <FormControl>
          <InputLabel id='combobox-availability'>Disponibilidad</InputLabel>
          <Select defaultValue='true' id='combobox-availability' label='Disponibilidad' {...register('is_available')}>
            <MenuItem value='false'>{EAvailability.false}</MenuItem>
            <MenuItem value='true'>{EAvailability.true}</MenuItem>
          </Select>
        </FormControl>

        <Button type='submit' sx={{ marginTop: 3 }} variant='contained' color='success'>
          Crear
        </Button>
      </Grid>
    </form>
  );
};

export default CreateProduct;
