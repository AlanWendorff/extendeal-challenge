import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsController from '@core/products/application/Products.controller';
import productsRepository from '@core/products/infrastructure/repositories/Products.repository';
import { TProductItemModel } from '@core/products/domain/models/Products.model';
import { ROOT } from '@/constants/routes';

interface IUseModifyProduct {
  error: string | null;
  handlePutProduct: (data: TProductItemModel) => void;
}

const useModifyProduct = (): IUseModifyProduct => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handlePutProduct = (data: TProductItemModel) => {
    productsController(productsRepository())
      .putProduct(data)
      .then(() => {
        navigate(ROOT);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return {
    error,
    handlePutProduct
  };
};

export default useModifyProduct;
