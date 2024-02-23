import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsController from '@core/products/application/Products.controller';
import productsRepository from '@core/products/infrastructure/repositories/Products.repository';
import { TProductItemModel } from '@core/products/domain/models/Products.model';
import { ROOT } from '@/constants/routes';

interface IUseCreateProduct {
  isLoading: boolean;
  error: string | null;
  handlePostProduct: (data: TProductItemModel) => void;
}

const useCreateProduct = (): IUseCreateProduct => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handlePostProduct = (data: TProductItemModel) => {
    productsController(productsRepository())
      .postProduct(data)
      .then(() => {
        setIsLoading(false);
        navigate(ROOT);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    error,
    handlePostProduct
  };
};

export default useCreateProduct;
