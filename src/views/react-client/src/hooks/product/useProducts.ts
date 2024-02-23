import { useState, useEffect } from 'react';
import productsController from '@core/products/application/Products.controller';
import productsRepository from '@core/products/infrastructure/repositories/Products.repository';
import TProducts from '@core/products/domain/models/Products.model';

interface IUseProducts {
  products: TProducts | null;
  isLoading: boolean;
  error: string | null;
  handleDeleteProduct: (id: string) => void;
}

const useProducts = (): IUseProducts => {
  const [products, setProducts] = useState<TProducts | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    productsController(productsRepository())
      .getProducts()
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteProduct = (id: string) => {
    setIsLoading(true);
    productsController(productsRepository())
      .deleteProduct(id)
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return {
    products,
    isLoading,
    error,
    handleDeleteProduct
  };
};

export default useProducts;
