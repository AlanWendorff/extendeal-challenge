import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useCreateProduct from '@/hooks/product/useCreateProduct';
import { v4 as uuid } from 'uuid';
import Form from './components/Form';

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

  return <Form onSubmit={handleSubmit(onSubmit)} register={register} />;
};

export default CreateProduct;
