import { TProductItemModel } from '../domain/models/Products.model';
import IProductsRepository from '../domain/repositories/Products.repository';
import ProductsService from '../domain/services/Products.service';

interface IProductsController extends IProductsRepository {}

const ProductsController = (repository: IProductsRepository): IProductsController => ({
  getProducts: () => {
    return ProductsService(repository).getProducts();
  },
  getProduct: (id: string) => {
    return ProductsService(repository).getProduct(id);
  },
  postProduct: (data: TProductItemModel) => {
    return ProductsService(repository).postProduct(data);
  },
  putProduct: (data: TProductItemModel) => {
    return ProductsService(repository).putProduct(data);
  },
  deleteProduct: (id: string) => {
    return ProductsService(repository).deleteProduct(id);
  }
});

export default ProductsController;
