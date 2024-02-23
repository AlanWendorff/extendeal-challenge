import { TProductsModel, TProductItemModel, TSingleProductModel } from '../models/Products.model';

interface IProductsRepository {
  getProducts: () => Promise<TProductsModel>;
  getProduct: (id: string) => Promise<TSingleProductModel>;
  postProduct: (data: TProductItemModel) => Promise<TProductsModel>;
  putProduct: (data: TProductItemModel) => Promise<TProductsModel>;
  deleteProduct: (id: string) => Promise<TProductsModel>;
}

export default IProductsRepository;
