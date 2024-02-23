import { FC, ReactNode } from 'react';
import { CircularProgress, Grid } from '@mui/material';

interface ILoadingProps {
  isLoading: boolean;
  children: ReactNode;
}

const Loading: FC<ILoadingProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Grid container justifyContent='center'>
        <CircularProgress sx={{ margin: 20 }} />
      </Grid>
    );
  }

  return children;
};

export default Loading;
