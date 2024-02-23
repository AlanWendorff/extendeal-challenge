import { FC } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROOT } from '@/constants/routes';

const BackToHome: FC = () => (
  <Link to={ROOT}>
    <Button type='submit' sx={{ marginTop: 3 }} variant='contained'>
      Volver al inicio
    </Button>
  </Link>
);

export default BackToHome;
