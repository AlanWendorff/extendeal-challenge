import TProducts, { TProduct, TSingleProduct } from '../models/Products.model';

interface IProductsRepository {
  getProducts: () => Promise<TProducts>;
  getProduct: (id: string) => Promise<TSingleProduct>;
  postProduct: (data: TProduct) => Promise<TProducts>;
  putProduct: (data: TProduct) => Promise<TProducts>;
  deleteProduct: (id: string) => Promise<TProducts>;
}

export default IProductsRepository;
