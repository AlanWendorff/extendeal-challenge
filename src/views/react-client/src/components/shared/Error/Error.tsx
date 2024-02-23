import { FC, ReactNode } from 'react';

interface IErrorProps {
  error?: string | null;
  children: ReactNode;
}

const Error: FC<IErrorProps> = ({ error, children }) => {
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return children;
};

export default Error;
