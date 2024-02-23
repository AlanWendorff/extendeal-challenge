import { FC } from 'react';
import { CircularProgress } from '@mui/material';

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: FC<ILoadingProps> = ({ isLoading }) => {
  if (isLoading) {
    return <></>;
  }

  return <CircularProgress />;
};

export default Loading;
