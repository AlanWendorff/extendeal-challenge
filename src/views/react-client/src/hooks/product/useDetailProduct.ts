import { useState, useEffect } from 'react';
import productsController from '@core/products/application/Products.controller';
import productsRepository from '@core/products/infrastructure/repositories/Products.repository';
import { TSingleProduct } from '@core/products/domain/models/Products.model';
import { useParams } from 'react-router-dom';

interface IUseDetailProduct {
  product: TSingleProduct | null;
  isLoading: boolean;
  error: string | null;
}

const useDetailProduct = (): IUseDetailProduct => {
  const { id } = useParams();
  const [product, setProduct] = useState<TSingleProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    productsController(productsRepository())
      .getProduct(`${id}`)
      .then((res) => {
        setProduct(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  return {
    product,
    isLoading,
    error
  };
};

export default useDetailProduct;
