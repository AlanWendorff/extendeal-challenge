import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loading from '@/components/shared/Loading';
import Error from '@/components/shared/Error';
import useModifyProduct from '@/hooks/product/useModifyProduct';
import Form from './components/Form';
import IProductForm from '@/interfaces/products/Form.interface';
import useDetailProduct from '@/hooks/product/useDetailProduct';

const DetailProduct: FC = () => {
  const { product, error, isLoading } = useDetailProduct();
  const { handlePutProduct } = useModifyProduct();
  const { register, handleSubmit } = useForm<IProductForm>();

  const onSubmit: SubmitHandler<IProductForm> = (data) => {
    handlePutProduct({
      id: `${product?.response.product.id}`,
      product_id: `${product?.response.product.product_id}`,
      name: data.name,
      thumbnail_url: data.thumbnail_url,
      stock: data.stock,
      price: data.price,
      is_available: `${data.is_available}` === 'true'
    });
  };

  return (
    <Loading isLoading={isLoading}>
      <Error error={error}>
        {product && (
          <Form
            onSubmit={handleSubmit(onSubmit)}
            product_id={product.response.product.product_id}
            is_available={product.response.product.is_available}
            name={product.response.product.name}
            price={product.response.product.price}
            stock={product.response.product.stock}
            thumbnail_url={product.response.product.thumbnail_url}
            register={register}
          />
        )}
      </Error>
    </Loading>
  );
};

export default DetailProduct;
