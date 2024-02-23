import { FC, ReactNode } from 'react';
import { CircularProgress } from '@mui/material';

interface ILoadingProps {
  isLoading: boolean;
  children: ReactNode;
}

const Loading: FC<ILoadingProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return <CircularProgress />;
  }

  return children;
};

export default Loading;
