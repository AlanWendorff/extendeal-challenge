import { TProductItemModel } from '../models/Products.model';
import IProductsRepository from '../repositories/Products.repository';

interface IProductsService extends IProductsRepository {}

const productsService = (repository: IProductsRepository): IProductsService => ({
  getProducts: () => {
    return repository.getProducts();
  },
  getProduct: (id: string) => {
    return repository.getProduct(id);
  },
  postProduct: (data: TProductItemModel) => {
    return repository.postProduct(data);
  },
  putProduct: (data: TProductItemModel) => {
    return repository.putProduct(data);
  },
  deleteProduct: (id: string) => {
    return repository.deleteProduct(id);
  }
});

export default productsService;
