import { TProduct } from '../models/Products.model';
import IProductsRepository from '../repositories/Products.repository';

interface IProductsService extends IProductsRepository {}

const productsService = (repository: IProductsRepository): IProductsService => ({
  getProducts: () => {
    return repository.getProducts();
  },
  getProduct: (id: string) => {
    return repository.getProduct(id);
  },
  postProduct: (data: TProduct) => {
    return repository.postProduct(data);
  },
  putProduct: (data: TProduct) => {
    return repository.putProduct(data);
  },
  deleteProduct: (id: string) => {
    return repository.deleteProduct(id);
  }
});

export default productsService;
