import { FC } from 'react';

interface IErrorProps {
  error?: string | null;
}

const Error: FC<IErrorProps> = ({ error }) => {
  if (!error) {
    return <></>;
  }

  return <h1>Error: {error}</h1>;
};

export default Error;
