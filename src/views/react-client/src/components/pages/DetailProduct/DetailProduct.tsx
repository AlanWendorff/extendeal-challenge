import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import getProduct from '@/services/products/getProduct.service';
import { useParams } from 'react-router-dom';
import { ISingleProductDTO } from '@core/configuration/http/dto/Products.dto';
import Loading from '@/components/shared/Loading';
import Error from '@/components/shared/Error';
import useModifyProduct from '@/hooks/product/useModifyProduct';
import Form from './components/Form';
import IProductForm from '@/interfaces/products/Form.interface';

const DetailProduct: FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ISingleProductDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    setIsLoading(true);
    getProduct(`${id}`)
      .then((res) => {
        setProduct(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

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
