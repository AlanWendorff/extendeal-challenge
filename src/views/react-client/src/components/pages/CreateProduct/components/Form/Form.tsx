import { ComponentProps, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Button, FormControl, Grid, InputLabel, Select, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import IProductForm from '@/interfaces/products/Form.interface';

enum EAvailability {
  true = 'Si',
  false = 'No'
}

export interface IFormProps extends ComponentProps<'form'> {
  register: UseFormRegister<IProductForm>;
}

const Form: FC<IFormProps> = ({ register, ...rest }) => (
  <form {...rest}>
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

export default Form;
