import { FC } from 'react';

interface IErrorProps {
  error?: string | null;
}

const Error: FC<IErrorProps> = ({ error }) => {
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return <></>;
};

export default Error;
